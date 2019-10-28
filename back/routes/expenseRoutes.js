const Multer = require('multer');
const ExpenseController = require('../controllers/ExpenseController');
const gcsMiddlewares = require('../middlewares/google-storage');
const VerifyToken = require('../services/auth');

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024 // Maximum file size is 10MB
  }
});

module.exports = app => {
  app.get('/api/v1/expenses', ExpenseController.findAll);
  app.post(
    '/api/v1/expenses',
    multer.single('file'),
    gcsMiddlewares.sendUploadToGCS,
    ExpenseController.create
  );
  app.get('/api/v1/expenses/:expenseId', ExpenseController.read);
  app.put('/api/v1/expenses/:expenseId', ExpenseController.edit);
  app.delete('/api/v1/expenses/:expenseId', ExpenseController.delete);
};
