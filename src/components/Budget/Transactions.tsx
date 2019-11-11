import React from 'react';
import { Link } from 'react-router-dom';
import { SmallCards } from 'components/SmallCards';

interface Props {
  transactions: any;
  activeFilter: string;
  transactionType: string;
}

const Transactions: React.FC<Props> = ({
  transactions,
  activeFilter,
  transactionType,
}) => {
  return (
    <>
      {transactions.map(
        (item, index: number) =>
          item.transactionType === transactionType &&
          (activeFilter === transactionType || !activeFilter) && (
            <Link
              to={`/budget/${item.month}_${item.year}/${item.category}?month=${item.month}&year=${item.year}&category=${item.category}`}
              key={index}
            >
              <SmallCards
                category={item.category}
                real={item.totalReal}
                budget={item.totalEstimated}
                score={item.balance}
              />
            </Link>
          )
      )}
    </>
  );
};

export default Transactions;
