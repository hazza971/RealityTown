const crypto = require("crypto");

function base64UrlEncode(input) {
  return Buffer.from(input).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function base64UrlDecode(input) {
  const normalized = String(input).replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "===".slice((normalized.length + 3) % 4);
  return Buffer.from(padded, "base64").toString("utf8");
}

function sign(value, secret) {
  return crypto.createHmac("sha256", secret).update(value).digest("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}

function encodeSession(payload, secret) {
  const json = JSON.stringify(payload);
  const data = base64UrlEncode(json);
  const signature = sign(data, secret);
  return `${data}.${signature}`;
}

function decodeSession(token, secret) {
  const [data, signature] = String(token || "").split(".");
  if (!data || !signature) return null;
  if (sign(data, secret) !== signature) return null;
  try {
    const parsed = JSON.parse(base64UrlDecode(data));
    if (parsed && parsed.exp && Date.now() > parsed.exp) return null;
    return parsed;
  } catch {
    return null;
  }
}

function getCookie(req, name) {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  if (!match) return "";
  return decodeURIComponent(match.slice(name.length + 1));
}

module.exports = {
  encodeSession,
  decodeSession,
  getCookie
};
