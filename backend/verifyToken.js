const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.cookies?.token; // ✅ safer access

  if (!token) {
    return res.status(401).json({ message: "You are not authenticated" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token is invalid" });
    }

    req.userId = decoded._id; // ✅ attached user ID to request
    next();
  });
};

module.exports = verifyToken;
