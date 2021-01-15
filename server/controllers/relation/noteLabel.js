import NoteLabel from "../../models/relationship/NoteLabel";

exports.addNoteLabel = async (req, res) => {
  try {
    const lists = await List.find({}).populate({
      path: "label",
      select: "title",
    });

    res.status(200).json({ success: true, data: lists });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
