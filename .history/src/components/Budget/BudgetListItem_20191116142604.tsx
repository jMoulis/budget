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
  border-radius: 0.7rem;
  flex: 1;
  margin: 0.5rem;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  justify-content: space-between;
`;

const BudgetListItem: React.FC<Props> = ({ transaction }) => {
  return (
    <Root
      to={`/budget/${transaction.month}_${transaction.year}?month=${transaction.month}&year=${transaction.year}`}
    >
      <span>{`${moment(transaction.month, 'MM').format('MMMM')} ${
        transaction.year
      }`}</span>
    </Root>
  );
};

export default BudgetListItem;
