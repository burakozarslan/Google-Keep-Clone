const { verifyToken } = require("../utils/token");

exports.auth = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split("Bearer ")[1];

    const verified = verifyToken(token);
    if (!verified) return res.status(401).json({ error: "Invalid token" });

    req.userId = verified.id;

    next();
  } catch (_) {
    return res.status(401).json({ error: "You must provide a token" });
  }
};
