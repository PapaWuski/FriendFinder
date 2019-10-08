const express = require("express");
const router = express.Router();

const apiController = require("../controller/apiController")

router.get("/friends",apiController.getData)
router.post("/friends",apiController.addData)

module.exports = router;