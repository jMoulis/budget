const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');

module.exports = app => {
  authRoutes(app);
  userRoutes(app);
  expenseRoutes(app);
};
