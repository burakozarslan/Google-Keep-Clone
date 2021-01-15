const mongoose = require("mongoose");

const NoteLabelSchema = new mongoose.Schema({
  noteId: { type: mongoose.Schema.Types.ObjectId, ref: "Note", required: true },
  labelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Label",
    required: true,
  },
});

module.exports = mongoose.model("NoteLabel", NoteLabelSchema);
