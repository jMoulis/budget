const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const transactionRoutes = require('./transactionRoutes');
const budgetRoutes = require('./budgetRoutes');

module.exports = app => {
  authRoutes(app);
  userRoutes(app);
  budgetRoutes(app);
  transactionRoutes(app);
};
