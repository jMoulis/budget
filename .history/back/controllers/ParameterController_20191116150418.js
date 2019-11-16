const Api = require('../services/Api');
const Parameter = require('../models/Parameter');
const gcs = require('../middlewares/gcs');

module.exports = {
  findPaymentSolution: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const paymentSolutions = Parameter.find({});
      return api.success({
        paymentSolutions,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  create: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const newTransaction = await Transaction.create({ ...req.body });
      if (req.file) {
        await Transaction.updateOne(
          { _id: newTransaction._id },
          {
            file: req.file.cloudStorageObject,
          }
        );
      }
      const transaction = await Transaction.findOne({
        _id: newTransaction._id,
      });
      return api.success({
        transaction,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  read: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const transaction = await Transaction.findOne({
        _id: req.params.transactionId,
      });
      const fileUrl = await gcs.generateV4ReadSignedUrl(
        'bucket_budget_app',
        transaction.file
      );
      return api.success({
        transaction: {
          ...transaction.toJSON(),
          file: fileUrl,
          // file: await generateV4ReadSignedUrl(
          //   'bucket_budget_app',
          //   transaction.file
          // ),
        },
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  edit: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      await Transaction.updateOne(
        { _id: req.params.transactionId },
        { ...req.body }
      );
      const transaction = await Transaction.findOne({
        _id: req.params.transactionId,
      });
      return api.success({
        transaction,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  delete: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const deleteTransaction = await Transaction.deleteOne({
        _id: req.params.transactionId,
      });

      if (deleteTransaction.deletedCount !== 1) {
        return api.failure(null, 404, 'Transaction introuvable');
      }
      return api.success({
        message: 'Transaction supprimé',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
};
