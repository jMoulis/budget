const ParameterController = require('../controllers/ParameterController');
const VerifyToken = require('../services/auth');

module.exports = app => {
  app.get('/api/v1/parameters', ParameterController.findAll);
  app.post('/api/v1/parameters', ParameterController.create);
  app.get('/api/v1/parameters/:budgetId', ParameterController.read);
  app.put('/api/v1/parameters/:budgetId', ParameterController.edit);
  app.delete('/api/v1/parameters/:budgetId', ParameterController.delete);
};
