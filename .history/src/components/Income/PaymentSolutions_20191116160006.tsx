import React from 'react';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card-solid.svg';
import { ReactComponent as MoneyBillIcon } from 'assets/icons/money-bill-alt-solid.svg';
import { ReactComponent as BankIcon } from 'assets/icons/university-solid.svg';
import { ReactComponent as MoneyCheckIcon } from 'assets/icons/money-check-solid.svg';
import styled from '@emotion/styled';

interface Props {}

const Root = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const PaymentListItem = styled.li`
  height: 5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  & * {
    color: #4fb3c8;
  }
`;

const PaymentSolutions: React.FC<Props> = () => {
  return (
    <Root>
      <li>Moyens de paiment</li>
      <PaymentListItem>
        <CreditCardIcon width="5rem" height="5rem" />
      </PaymentListItem>
      <PaymentListItem>
        <MoneyBillIcon width="5rem" height="5rem" />
      </PaymentListItem>
      <PaymentListItem>
        <BankIcon width="5rem" height="5rem" />
      </PaymentListItem>
      <PaymentListItem>
        <MoneyCheckIcon width="5rem" height="5rem" />
      </PaymentListItem>
    </Root>
  );
};

export default PaymentSolutions;
