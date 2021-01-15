const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
});

UserSchema.virtual("notes", {
  ref: "Note",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

UserSchema.virtual("notes", {
  ref: "Label",
  localField: "_id",
  foreignField: "user",
  justOne: false,
});

module.exports = model("User", UserSchema);
