const User = require("../models/User");

const { signToken } = require("../utils/token");

exports.authenticateUser = async (req, res) => {
  const userEmail = req.body.email;

  try {
    const existingUser = await User.findOne({ email: userEmail });

    if (existingUser) {
      const token = signToken({
        id: existingUser._id,
        email: existingUser.email,
      });

      res.status(200).json({ success: true, data: existingUser, token });
    } else {
      const newUserObj = new User({ email: userEmail });
      const newUser = await newUserObj.save();

      const token = signToken({ id: newUser._id, email: newUser.email });

      res.status(200).json({ success: true, data: newUser, token });
    }
  } catch (e) {
    res.status(401).json({ success: false, error: "Enter a valid email." });
  }
};
