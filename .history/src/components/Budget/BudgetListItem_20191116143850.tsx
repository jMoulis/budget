import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import moment from 'moment';
import { SmallCards } from 'components/SmallCards';

interface Props {
  transaction?: any;
}

const Root = styled(Link)``;

const BudgetListItem: React.FC<Props> = ({ transaction }) => {
  console.log(transaction);
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
      <span>
        {`${moment(transaction.month, 'MM').format('MMMM')} ${
          transaction.year
        }`}
      </span>
    </Root>
  );
};

export default BudgetListItem;
