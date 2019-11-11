const Multer = require('multer');
const TransactionController = require('../controllers/TransactionController');
const gcsMiddlewares = require('../middlewares/google-storage');
const VerifyToken = require('../services/auth');

const multer = Multer({
  storage: Multer.MemoryStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // Maximum file size is 10MB
  },
});

module.exports = app => {
  app.get('/api/v1/transactions', TransactionController.findAll);
  app.post(
    '/api/v1/transactions',
    multer.single('file'),
    gcsMiddlewares.sendUploadToGCS,
    TransactionController.create
  );
  app.get('/api/v1/transactions/:transactionId', TransactionController.read);
  app.put('/api/v1/transactions/:transactionId', TransactionController.edit);
  app.delete(
    '/api/v1/transactions/:transactionId',
    TransactionController.delete
  );
};
