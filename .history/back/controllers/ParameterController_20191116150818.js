const Api = require('../services/Api');
const Parameter = require('../models/Parameter');

module.exports = {
  findAll: async (req, res, next) => {
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
      const newParameter = await Parameter.create({ ...req.body });
      if (req.file) {
        await Parameter.updateOne(
          { _id: newParameter._id },
          {
            file: req.file.cloudStorageObject,
          }
        );
      }
      const parameter = await Parameter.findOne({
        _id: newParameter._id,
      });
      return api.success({
        parameter,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  read: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const parameter = await Parameter.findOne({
        _id: req.params.parameterId,
      });
      return api.success({
        parameter,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  edit: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      await Parameter.updateOne(
        { _id: req.params.parameterId },
        { ...req.body }
      );
      const parameter = await Parameter.findOne({
        _id: req.params.parameterId,
      });
      return api.success({
        parameter,
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },

  delete: async (req, res, next) => {
    if (!req.body) next(new Error('No body found'));
    const api = new Api(res, req);
    try {
      const deleteParameter = await Parameter.deleteOne({
        _id: req.params.parameterId,
      });

      if (deleteParameter.deletedCount !== 1) {
        return api.failure(null, 404, 'Parameter introuvable');
      }
      return api.success({
        message: 'Parameter supprimé',
      });
    } catch (error) {
      return api.failure(error, 422);
    }
  },
};
