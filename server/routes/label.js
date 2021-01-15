const express = require("express");
const router = express.Router();

const { getLabels } = require("../controllers/label");
const { addLabel } = require("../controllers/label");
const { deleteLabel } = require("../controllers/label");
const { updateLabel } = require("../controllers/label");

router.route("/").get(getLabels);
router.route("/").post(addLabel);
router.route("/:id").delete(deleteLabel);
router.route("/:id").put(updateLabel);

module.exports = router;
