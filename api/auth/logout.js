module.exports = (_req, res) => {
  res.statusCode = 204;
  res.setHeader("set-cookie", "rt_session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0; Secure");
  res.end();
};
