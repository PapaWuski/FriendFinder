const express = require("express");
const router = express.Router();

const apiController = require("../controller/apiController")

router.get("/",apiController.getData)
router.post("/",apiController.addData)

module.exports = router;