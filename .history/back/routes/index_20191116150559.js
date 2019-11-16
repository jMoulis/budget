const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const parameterRoutes = require('./parameterRoutes');
const budgetRoutes = require('./budgetRoutes');
const budgetRoutes = require('./budgetRoutes');

module.exports = app => {
  authRoutes(app);
  userRoutes(app);
  budgetRoutes(app);
  parameterRoutes(app);
  transactionRoutes(app);
};
