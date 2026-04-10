const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const header = req.headers.authorization || "";
  const [type, token] = header.split(" ");

  if (type !== "Bearer" || !token) {
    return res
      .status(401)
      .json({ message: "you´re not allowed to do this" });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: "server misconfigured" });
  }

  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    return next();
  } catch (_err) {
    return res
      .status(401)
      .json({ message: "you´re not allowed to do this" });
  }
}

module.exports = {
  authenticate,
};

