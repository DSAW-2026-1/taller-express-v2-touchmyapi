const express = require("express");
const { requestInfo } = require("../controllers/requestController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/request", authenticate, requestInfo);

module.exports = router;

