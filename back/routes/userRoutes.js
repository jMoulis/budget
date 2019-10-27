const UserController = require('../controllers/UserController');

module.exports = app => {
  app.get('/api/v1/users', UserController.findAll);
  app.get('/api/v1/users/:userId', UserController.read);
  app.put('/api/v1/users/:userId', UserController.edit);
  app.delete('/api/v1/users/:userId', UserController.delete);
};
