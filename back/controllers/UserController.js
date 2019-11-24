const nodemailer = require('nodemailer');
const Api = require('../services/Api');
const keys = require('../config/keys');
const User = require('../models/User');

module.exports = {
  findAll: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const users = await User.find({});
      return api.success({
        users,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  read: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const user = await User.findOne({
        _id: req.params.userId,
      });
      return api.success({
        user,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  edit: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      await User.updateOne({ _id: req.params.userId }, { ...req.body });
      const user = await User.findOne(
        { _id: req.params.userId },
        { password: 0 }
      );
      return api.success({
        user,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  delete: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const deleteUser = await User.deleteOne({
        _id: req.params.userId,
      });

      if (deleteUser.deletedCount !== 1) {
        return api.failure(null, 404, 'Utilisateur introuvable');
      }
      return api.success({
        message: 'Utilisateur supprimé',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  main: async ({ message, to, subject, from }) => {
    const transporter = nodemailer.createTransport({
      ...keys.mail,
    });
    try {
      await transporter.sendMail({
        from: from || '"Service client eukleia"<hedge-request@eukleia.eu>',
        to,
        subject,
        html: `${message}`,
      });
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },
};
