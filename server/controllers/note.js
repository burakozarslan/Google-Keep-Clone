const Note = require("../models/Note");
const User = require("../models/User");

exports.getNotes = async (req, res) => {
  const userId = req.userId;

  try {
    const notes = await Note.find({ user: userId }).populate({
      path: "labels",
      populate: { path: "labelId" },
    });

    res.status(200).json({ success: true, data: notes });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};

exports.addNote = async (req, res) => {
  const newNoteObj = req.body;
  newNoteObj.user = req.userId;

  try {
    const notes = await Note.create(newNoteObj);

    res.status(200).json({ success: true, data: notes });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });

    res.status(200).json({ success: true, data: note });
  } catch (e) {
    res.status(400).json({ success: false, error: e.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    note.remove();

    res.status(200).json({ success: true, data: note });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
