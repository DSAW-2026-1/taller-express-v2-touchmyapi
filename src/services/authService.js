function validateCredentials(user, password) {
  if (user === "ADMIN" && password === "ADMIN") return { role: "ADMIN" };
  if (user === "USER" && password === "USER") return { role: "USER" };
  return null;
}

module.exports = {
  validateCredentials,
};

