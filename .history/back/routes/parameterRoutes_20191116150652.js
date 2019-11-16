const BudgetController = require('../controllers/BudgetController');
const VerifyToken = require('../services/auth');

module.exports = app => {
  app.get('/api/v1/parameters', BudgetController.findAll);
  app.post('/api/v1/parameters', BudgetController.create);
  app.get('/api/v1/parameters/:budgetId', BudgetController.read);
  app.put('/api/v1/parameters/:budgetId', BudgetController.edit);
  app.delete('/api/v1/parameters/:budgetId', BudgetController.delete);
};
