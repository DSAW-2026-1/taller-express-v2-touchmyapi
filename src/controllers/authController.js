const jwt = require("jsonwebtoken");
const { validateCredentials } = require("../services/authService");

function login(req, res) {
  const { user, password } = req.body || {};

  const result = validateCredentials(user, password);
  if (!result) {
    return res.status(400).json({ message: "invalid credentials" });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res.status(500).json({ message: "server misconfigured" });
  }

  const token = jwt.sign(
    { role: result.role },
    secret,
    { expiresIn: "1h" }
  );

  return res.status(200).json({ token });
}

module.exports = {
  login,
};

