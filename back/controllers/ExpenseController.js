const nodemailer = require('nodemailer');
const Api = require('../services/Api');
const keys = require('../config/keys');
const Expense = require('../models/Expense');

module.exports = {
  findAll: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const expenses = await Expense.find({});
      return api.success({
        expenses
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  create: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const newExpense = await Expense.create({ ...req.body });
      if (req.file) {
        console.log(req.file);
        await Expense.updateOne(
          { _id: newExpense._id },
          {
            file: req.file.gcsUrl
          }
        );
      }
      const expense = await Expense.findOne({ _id: newExpense._id });
      return api.success({
        expense
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  read: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const expense = await Expense.findOne({
        _id: req.params.expenseId
      });
      return api.success({
        expense
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  edit: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      await Expense.updateOne({ _id: req.params.expenseId }, { ...req.body });
      const expense = await Expense.findOne({ _id: req.params.expenseId });
      return api.success({
        expense
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  delete: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const deleteExpense = await Expense.deleteOne({
        _id: req.params.expenseId
      });

      if (deleteExpense.deletedCount !== 1) {
        return api.failure(null, 404, 'Expense introuvable');
      }
      return api.success({
        message: 'Expense supprimé'
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  main: async ({ message, to, subject, from }) => {
    const transporter = nodemailer.createTransport({
      ...keys.mail
    });
    try {
      await transporter.sendMail({
        from: from || '"Service client eukleia"<hedge-request@eukleia.eu>',
        to,
        subject,
        html: `${message}`
      });
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  }
};
