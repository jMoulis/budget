const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  lastName: {
    type: String,
    required: [true, 'Votre nom est obligatoire'],
  },
  firstName: {
    type: String,
    required: [true, 'Votre prénom est obligatoire'],
  },
  email: {
    type: String,
    required: [true, 'Email est obligatoire'],
    validate: {
      validator: v =>
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          v,
        ),
      message: 'Veuillez fournir un email valide',
    },
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est obligatoire'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

UserSchema.pre('update', function preUpdate(next) {
  this.update({}, { $set: { updatedAt: Date.now() } });
  return next();
});
const User = mongoose.model('user', UserSchema);

module.exports = User;
