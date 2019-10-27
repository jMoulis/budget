const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).send({
        auth: false,
        message: "Vous n'êtes pas autorisé",
        stack: 'No token provided',
      });
    }

    const parsedToken = token.replace('Bearer ', '');
    jwt.verify(parsedToken, keys.jwtSecret, async (err, decoded) => {
      if (err) {
        return res.status(401).send({
          auth: false,
          login: {
            detail: 'Vous avez été déconnecté. Veuillez vous reconnecter',
          },
        });
      }
      req.user = decoded.user.id;
      const user = await User.findOne(
        { _id: decoded.user._id },
        {
          password: 0,
        },
      );
      req.user = user;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
