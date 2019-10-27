const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResetPwdSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: 'user',
  },
  token: String,
});

const ResetPwd = mongoose.model('resetpwd', ResetPwdSchema);

module.exports = ResetPwd;
