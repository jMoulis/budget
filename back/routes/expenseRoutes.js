const multer = require('multer');
const mimeType = require('mime-types');
const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const ExpenseController = require('../controllers/ExpenseController');
const VerifyToken = require('../services/auth');
const ROOT_FOLDER = path.join(__dirname, '/../temp/');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(ROOT_FOLDER)) {
      return mkdirp(ROOT_FOLDER, error => {
        if (error) {
          return cb('you must create a temp folder', false);
        }
        return cb(null, ROOT_FOLDER);
      });
    }
    return cb(null, ROOT_FOLDER);
  },
  filename: (req, file, cb) => {
    console.log(mimeType.extension(file.mimetype));
    cb(
      null,
      `${file.fieldname}_${req.body.label}.${mimeType.extension(file.mimetype)}`
    );
  }
});

const upload = multer({ storage });

module.exports = app => {
  app.get('/api/v1/expenses', ExpenseController.findAll);
  app.post('/api/v1/expenses', upload.single('file'), ExpenseController.create);
  app.get('/api/v1/expenses/:expenseId', ExpenseController.read);
  app.put('/api/v1/expenses/:expenseId', ExpenseController.edit);
  app.delete('/api/v1/expenses/:expenseId', ExpenseController.delete);
};
