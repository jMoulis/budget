const mongoose = require('mongoose');

const { Schema } = mongoose;

const ParametersSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },
    label: {
      type: String,
      required: true,
    },
    category: String,
    amount: { type: Number, required: true },
    file: String,
    paymentSolution: String,
    currency: String,
    location: String,
    companyName: String,
    month: String,
    year: String,
    transactionType: {
      type: String,
      enum: ['income', 'expense'],
    },
    estimated: Boolean,
  },
  {
    timestamps: true,
  }
);

const Parameters = mongoose.model('parameters', ParametersSchema);

module.exports = Parameters;
