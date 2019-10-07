const express = require("express");
const router = express.Router();
const htmlController = require("../controller/htmlController")

router.get("/",htmlController.index)
router.get("/survey",htmlController.survey)
router.get("/result",htmlController.result)

module.exports = router;