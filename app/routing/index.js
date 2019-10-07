const express = require("express");
const router = express.Router();
const api = require("./apiRoutes");
const html = require("./htmlRoutes");

router.use("/api", api);
router.use("/", html);

module.exports = router;
