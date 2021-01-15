const imageUpload = (file, res) => {
  if (file.mimetype.startsWith("image")) {
    const photoName = Date.now().toString() + file.md5 + file.name;
    const photoPath = `./media/images/${photoName}`;

    file.mv(photoPath, (err) => {
      if (err)
        res
          .status(500)
          .json({ success: false, message: "Something went wrong." });
      res.status(200).json({ success: true, data: photoName });
    });
  } else {
    res.status(400).json({ success: false, message: "Invalid file type." });
  }
};

module.exports = imageUpload;
