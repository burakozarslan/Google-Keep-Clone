const mongoose = require("mongoose");
const NoteLabelSchema = require("./relationship/NoteLabel");

const LabelSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [1, "Label must contain a character."],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

LabelSchema.virtual("notes", {
  ref: "NoteLabel",
  localField: "_id",
  foreignField: "noteId",
  justOne: false,
});

LabelSchema.post("remove", async function () {
  await NoteLabelSchema.deleteMany({ labelId: this._id });
});

module.exports = mongoose.model("Label", LabelSchema);
