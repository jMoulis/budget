const mongoose = require('mongoose');
const moment = require('moment');

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

TransactionSchema.pre('save', function(next) {
  //  console.log(this);
  console.log();
  if (!this.category) {
    this.category = 'uncategory';
  }
  if (moment(this.date).isValid()) {
    this.year = moment(this.date).format('YYYY');
    this.month = moment(this.date).format('MM');
  } else {
    throw new Error('something went wrong');
  }
  next();
});

const Transaction = mongoose.model('transaction', TransactionSchema);

module.exports = Transaction;
