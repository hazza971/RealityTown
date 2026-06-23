const { decodeSession, encodeSession } = require("../../auth/_session");

async function exchangeCode(code, redirectUri, clientId, clientSecret) {
  const body = new URLSearchParams();
  body.set("client_id", clientId);
  body.set("client_secret", clientSecret);
  body.set("grant_type", "authorization_code");
  body.set("code", code);
  body.set("redirect_uri", redirectUri);

  const response = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Token exchange failed");
  }

  return await response.json();
}

async function fetchUser(accessToken) {
  const response = await fetch("https://discord.com/api/users/@me", {
    headers: { authorization: `Bearer ${accessToken}` }
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "User fetch failed");
  }

  return await response.json();
}

module.exports = async (req, res) => {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const clientSecret = process.env.DISCORD_CLIENT_SECRET;
  const redirectUri = process.env.DISCORD_REDIRECT_URI;
  const sessionSecret = process.env.SESSION_SECRET;

  if (!clientId || !clientSecret || !redirectUri || !sessionSecret) {
    res.statusCode = 500;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ message: "Missing Discord env vars" }));
    return;
  }

  const code = typeof req.query?.code === "string" ? req.query.code : "";
  const state = typeof req.query?.state === "string" ? req.query.state : "";

  const statePayload = decodeSession(state, sessionSecret);
  const returnTo = statePayload?.r || "/#account";

  if (!code || !statePayload) {
    res.statusCode = 302;
    res.setHeader("location", returnTo);
    res.end();
    return;
  }

  try {
    const token = await exchangeCode(code, redirectUri, clientId, clientSecret);
    const user = await fetchUser(token.access_token);

    const sessionValue = encodeSession(
      {
        id: user.id,
        username: user.username,
        discriminator: user.discriminator,
        avatar: user.avatar,
        exp: Date.now() + 30 * 24 * 60 * 60 * 1000
      },
      sessionSecret
    );

    const cookie = `rt_session=${encodeURIComponent(sessionValue)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000; Secure`;
    res.statusCode = 302;
    res.setHeader("set-cookie", cookie);
    res.setHeader("location", returnTo);
    res.end();
  } catch {
    res.statusCode = 302;
    res.setHeader("location", returnTo);
    res.end();
  }
};
