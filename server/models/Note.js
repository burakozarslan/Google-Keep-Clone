const mongoose = require("mongoose");
const NoteLabelSchema = require("./relationship/NoteLabel");
const Label = require("./Label");

const colors = {
  Black: "#202124",
  Red: "#5c2b29",
  Orange: "#614a19",
  Yellow: "#635d19",
  Green: "#345920",
  Teal: "#16504b",
  Blue: "#2d555e",
  DarkBlue: "#1e3a5f",
  Purple: "#42275e",
  Pink: "#5b2245",
  Brown: "#442f19",
  Gray: "#3c3f43",
};

const colorsEnum = Object.values(colors);

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [1, "Title must contain a character."],
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: [1, "Content must contain a character."],
    },
    pinned: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      required: false,
    },
    trash: {
      type: Boolean,
      default: false,
    },
    edited: {
      type: Date,
      default: Date.now,
    },
    expire: {
      type: Date,
      required: false,
    },
    color: {
      type: String,
      enum: colorsEnum,
      default: colors.Black,
    },
    labelsTemp: {
      type: [String],
      required: false,
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

NoteSchema.virtual("labels", {
  ref: "NoteLabel",
  localField: "_id",
  foreignField: "noteId",
  justOne: false,
});

NoteSchema.pre("save", async function (next) {
  let labels = this.labelsTemp;
  this.labelsTemp = null;

  labels.forEach(async (label) => {
    let _label = await Label.findById(label);

    if (_label) {
      await NoteLabelSchema.updateOne(
        { noteId: this._id, labelId: _label._id },
        {},
        { upsert: true }
      );
    }
  });

  next();
});

NoteSchema.pre("findOneAndUpdate", async function (next) {
  if (!this._update.labelsTemp) next();

  const newLabels = this._update.labelsTemp;
  const noteId = this._conditions._id;

  const existingLabelObjects = await NoteLabelSchema.find({ noteId });
  let existingLabels = existingLabelObjects.map((item) => item.labelId);

  newLabels.forEach(async (label) => {
    let _label = await Label.findById(label);

    if (_label) {
      const index = existingLabels.indexOf(_label._id);
      if (index > -1) existingLabels.splice(index, 1);

      await NoteLabelSchema.updateOne(
        { noteId, labelId: _label._id },
        {},
        { upsert: true }
      );
    }
  });

  existingLabels.forEach(async (label) => {
    await NoteLabelSchema.findOneAndDelete({ noteId, labelId: label });
  });

  this._update.labelsTemp = null;

  next();
});

NoteSchema.post("remove", async function () {
  await NoteLabelSchema.deleteMany({ noteId: this._id });
});

module.exports = mongoose.model("Note", NoteSchema);
