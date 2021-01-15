const Label = require("../models/Label");

exports.getLabels = async (req, res) => {
  try {
    const labels = await Label.find({ user: req.userId }).populate(
      "lists notes"
    );

    res.status(200).json({ success: true, data: labels });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};

exports.addLabel = async (req, res) => {
  const newLabelObj = req.body;
  newLabelObj.user = req.userId;

  try {
    const label = await Label.create(newLabelObj);

    res.status(200).json({ success: true, data: label });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};

exports.deleteLabel = async (req, res) => {
  try {
    const label = await Label.findById(req.params.id);

    label.remove();

    res.status(200).json({ success: true, data: label });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};

exports.updateLabel = async (req, res) => {
  try {
    const label = await Label.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    label.save();

    res.status(200).json({ success: true, data: label });
  } catch (e) {
    res.status(400).json({ success: false, error: e });
  }
};
