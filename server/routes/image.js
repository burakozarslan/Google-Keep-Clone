const express = require("express");
const router = express.Router();

const { addImage } = require("../controllers/image");

router.route("/").post(addImage);

module.exports = router;
