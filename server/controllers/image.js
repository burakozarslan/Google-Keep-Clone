const imageUpload = require("../utils/imageUpload");

exports.addImage = async (req, res) => {
  const file = req.files.file;

  if (!file)
    res.status(400).json({ success: false, messsage: "No file found." });

  imageUpload(file, res);
};
