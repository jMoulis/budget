const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExpenseSchema = new Schema(
  {
    label: {
      type: String,
      required: true
    },
    category: String,
    amount: Number,
    file: String
  },
  {
    timestamps: true
  }
);

const Expense = mongoose.model('expense', ExpenseSchema);

module.exports = Expense;
