const mongoose = require('mongoose');
const moment = require('moment');

const { Schema } = mongoose;

const TransactionSchema = new Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
      required: [true, 'La date est obligatoire'],
    },
    label: {
      type: String,
      required: [true, 'La désignation est obligatoire'],
    },
    category: String,
    amount: { type: Number, required: [true, 'Le montant est obligatoire'] },
    file: String,
    paymentSolution: String,
    currency: String,
    location: String,
    companyName: String,
    month: String,
    year: String,
    transactionType: {
      required: [true, 'Le type de transaction est obligatoire'],
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
