const crypto = require("crypto");
const { encodeSession } = require("../../auth/_session");

function randomId() {
  return crypto.randomBytes(16).toString("hex");
}

module.exports = (req, res) => {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;
  const sessionSecret = process.env.SESSION_SECRET;

  if (!clientId || !redirectUri || !sessionSecret) {
    res.statusCode = 500;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ message: "Missing DISCORD_CLIENT_ID / DISCORD_REDIRECT_URI / SESSION_SECRET" }));
    return;
  }

  const returnTo = typeof req.query?.return === "string" ? req.query.return : "/#account";
  const state = encodeSession({ r: returnTo, exp: Date.now() + 10 * 60 * 1000, n: randomId() }, sessionSecret);

  const url = new URL("https://discord.com/api/oauth2/authorize");
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", "identify");
  url.searchParams.set("state", state);

  res.statusCode = 302;
  res.setHeader("location", url.toString());
  res.end();
};
