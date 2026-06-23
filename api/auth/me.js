const { decodeSession, getCookie } = require("./_session");

module.exports = (req, res) => {
  const sessionSecret = process.env.SESSION_SECRET;
  if (!sessionSecret) {
    res.statusCode = 500;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ message: "Missing SESSION_SECRET" }));
    return;
  }

  const token = getCookie(req, "rt_session");
  const payload = decodeSession(token, sessionSecret);

  if (!payload) {
    res.statusCode = 401;
    res.setHeader("content-type", "application/json; charset=utf-8");
    res.end(JSON.stringify({ message: "unauthorized" }));
    return;
  }

  res.statusCode = 200;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(
    JSON.stringify({
      id: payload.id,
      username: payload.username,
      discriminator: payload.discriminator,
      avatar: payload.avatar
    })
  );
};
