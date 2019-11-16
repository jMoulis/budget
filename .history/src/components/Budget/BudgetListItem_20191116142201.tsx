import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  transaction?: any;
}

const BudgetListItem: React.FC<Props> = ({ transaction }) => {
  return (
    <Link
      to={`/budget/${transaction.month}_${transaction.year}?month=${transaction.month}&year=${transaction.year}`}
    >
      <span>{`${transaction.month} ${transaction.year}`}</span>
    </Link>
  );
};

export default BudgetListItem;
