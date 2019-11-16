const mongoose = require('mongoose');

const { Schema } = mongoose;

const ParametersSchema = new Schema(
  {
    paymentSolutions: [],
  },
  {
    timestamps: true,
  }
);

const Parameters = mongoose.model('parameters', ParametersSchema);

module.exports = Parameters;
