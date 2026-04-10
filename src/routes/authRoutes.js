const express = require("express");
const { login } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/Login", login);

module.exports = router;

