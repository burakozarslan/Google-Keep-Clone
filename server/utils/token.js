var jwt = require("jsonwebtoken");

exports.signToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

exports.verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  } catch (_) {
    return false;
  }
};
