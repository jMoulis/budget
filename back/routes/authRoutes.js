const AuthController = require('../controllers/AuthController');

module.exports = app => {
  app.post('/api/v1/login', AuthController.login);
  app.post('/api/v1/register', AuthController.register);
  app.post('/api/v1/resetpassword', AuthController.resetPassword);
  app.post('/api/v1/checkpassword', AuthController.checkPassword);
};
