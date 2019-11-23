const mongoose = require('mongoose');

const { Schema } = mongoose;

const TransactionSchema = new Schema(
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
      required: true,
      type: String,
      enum: ['income', 'expense'],
    },
    estimated: Boolean,
  },
  {
    timestamps: true,
  }
);

const Transaction = mongoose.model('transaction', TransactionSchema);
TransactionSchema.pre('save', function(next) {
  console.log(this);
  next();
});
module.exports = Transaction;
