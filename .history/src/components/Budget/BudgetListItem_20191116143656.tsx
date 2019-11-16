import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import moment from 'moment';
import { SmallCards } from 'components/SmallCards';

interface Props {
  transaction?: any;
}

const Root = styled(Link)`
  padding: 1rem;
  box-shadow: 0 1px 7px 2px rgba(82, 82, 82, 0.2);
  border-radius: 0.7rem;
  flex: 1;
  margin: 0.5rem;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  justify-content: space-between;
`;

const BudgetListItem: React.FC<Props> = ({ transaction }) => {
  console.log(transaction);
  return (
    <Root
      to={`/budget/${transaction.month}_${transaction.year}?month=${transaction.month}&year=${transaction.year}`}
    >
      <SmallCards
        category={transaction.category}
        real={transaction.totalReal}
        budget={transaction.totalEstimated}
        score={transaction.balance}
      />
      <span>{`${moment(transaction.month, 'MM').format('MMMM')} ${
        transaction.year
      }`}</span>
    </Root>
  );
};

export default BudgetListItem;
