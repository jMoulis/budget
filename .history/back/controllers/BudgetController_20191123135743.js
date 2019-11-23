const Api = require('../services/Api');
const Transaction = require('../models/Transaction');
const gcs = require('../middlewares/gcs');

module.exports = {
  findAll: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      let transactions = [];
      const isQuery = Object.keys(req.query).length > 0;
      if (!isQuery) {
        transactions = await Transaction.aggregate([
          {
            $group: {
              _id: {
                date: { $dateToString: { format: '%Y-%m', date: '$date' } },
              },
              month: {
                $first: '$month',
              },
              year: {
                $first: '$year',
              },
              totalEstimated: {
                $sum: {
                  $cond: [
                    {
                      $and: ['$estimated'],
                    },
                    '$amount',
                    null,
                  ],
                },
              },
              totalReal: {
                $sum: {
                  $cond: [
                    {
                      $and: [{ $not: ['$estimated'] }],
                    },
                    '$amount',
                    null,
                  ],
                },
              },
            },
          },
          {
            $addFields: {
              balance: {
                $cond: [
                  { $eq: ['$transactionType', 'expense'] },
                  { $subtract: ['$totalEstimated', '$totalReal'] },
                  { $subtract: ['$totalReal', '$totalEstimated'] },
                ],
              },
            },
          },
        ]);
      } else {
        console.log(req.query);
        transactions = await Transaction.aggregate([
          {
            $match: req.query,
          },
          {
            $group: {
              _id: {
                date: { $dateToString: { format: '%Y-%m', date: '$date' } },
                category: '$category',
                transactionType: '$transactionType',
              },
              category: { $first: '$category' },
              month: {
                $first: '$month',
              },
              year: {
                $first: '$year',
              },
              data: {
                $push: '$$ROOT',
              },
              transactionType: { $first: '$transactionType' },
              totalEstimated: {
                $sum: {
                  $cond: [
                    {
                      $and: ['$estimated'],
                    },
                    '$amount',
                    null,
                  ],
                },
              },
              totalReal: {
                $sum: {
                  $cond: [
                    {
                      $and: [{ $not: ['$estimated'] }],
                    },
                    '$amount',
                    null,
                  ],
                },
              },
            },
          },
          {
            $addFields: {
              balance: {
                $cond: [
                  { $eq: ['$transactionType', 'expense'] },
                  { $subtract: ['$totalEstimated', '$totalReal'] },
                  { $subtract: ['$totalReal', '$totalEstimated'] },
                ],
              },
            },
          },
        ]);
      }
      console.log(transactions);
      return api.success({
        budget: {
          date: req.query,
          transactions,
        },
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
