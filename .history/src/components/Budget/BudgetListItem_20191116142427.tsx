import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

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
  display: flex;
  justify-content: space-between;
`;

const BudgetListItem: React.FC<Props> = ({ transaction }) => {
  return (
    <Root
      to={`/budget/${transaction.month}_${transaction.year}?month=${transaction.month}&year=${transaction.year}`}
    >
      <span>{`${transaction.month} ${transaction.year}`}</span>
    </Root>
  );
};

export default BudgetListItem;
