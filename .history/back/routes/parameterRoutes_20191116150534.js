const Multer = require('multer');
const BudgetController = require('../controllers/BudgetController');
const gcsMiddlewares = require('../middlewares/google-storage');
const VerifyToken = require('../services/auth');

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

module.exports = app => {
  app.get('/api/v1/budgets', BudgetController.findAll);
  app.post(
    '/api/v1/budgets',
    multer.single('file'),
    gcsMiddlewares.sendUploadToGCS,
    BudgetController.create
  );
  app.get('/api/v1/budgets/:budgetId', BudgetController.read);
  app.put('/api/v1/budgets/:budgetId', BudgetController.edit);
  app.delete('/api/v1/budgets/:budgetId', BudgetController.delete);
};
