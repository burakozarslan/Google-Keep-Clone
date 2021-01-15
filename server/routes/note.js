const express = require("express");
const router = express.Router();

const { getNotes } = require("../controllers/note");
const { addNote } = require("../controllers/note");
const { updateNote } = require("../controllers/note");
const { deleteNote } = require("../controllers/note");

router.route("/").get(getNotes);
router.route("/").post(addNote);
router.route("/:id").put(updateNote);
router.route("/:id").delete(deleteNote);

module.exports = router;
