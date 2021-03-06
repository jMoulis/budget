import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import moment from 'moment';

interface Props {
  transaction?: any;
}

const Root = styled(Link)`
  padding: 1rem;
  box-shadow: 0 1px 7px 2px rgba(82, 82, 82, 0.2);
  border-radius: 1rem;
  flex: 1;
  margin: 0.5rem;
  min-height: 10rem;
  max-height: 10rem;
`;

const BudgetListItem: React.FC<Props> = ({ transaction }) => {
  return (
    <Root
      to={`/budget/${transaction.month}_${transaction.year}?month=${transaction.month}&year=${transaction.year}`}
    >
      {/* <SmallCards
        category={transaction.category}
        real={transaction.totalReal}
        budget={transaction.totalEstimated}
        score={transaction.balance}
      /> */}
      <h1>
        {`${moment(transaction.month, 'MM').format('MMMM')} ${
          transaction.year
        }`}
      </h1>
      <div>
        <span>Expenses</span>
        <span>Incomes</span>
      </div>
    </Root>
  );
};

export default BudgetListItem;
