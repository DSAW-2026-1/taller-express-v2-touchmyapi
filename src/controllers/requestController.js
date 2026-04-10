function requestInfo(req, res) {
  const role = req.user?.role;

  if (role === "ADMIN") {
    return res.status(200).json({ message: "Hi, from admin" });
  }

  if (role === "USER") {
    return res.status(200).json({ message: "Hi, from user" });
  }

  return res.status(401).json({ message: "you´re not allowed to do this" });
}

module.exports = {
  requestInfo,
};

