const express = require("express");
const { requestInfo } = require("../controllers/requestController");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/request", authenticate, requestInfo);
router.get("/Request", authenticate, requestInfo);

module.exports = router;

