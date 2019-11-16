import React from 'react';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card-solid.svg';
import { ReactComponent as MoneyBillIcon } from 'assets/icons/money-bill-alt-solid.svg';
import { ReactComponent as BankIcon } from 'assets/icons/university-solid.svg';
import { ReactComponent as MoneyCheckIcon } from 'assets/icons/money-check-solid.svg';
import styled from '@emotion/styled';

interface Props {}

const PaymentListItem = styled.li`
  padding: 1rem;
  height: 5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  & * {
    color: #4fb3c8;
  }
`;

const PaymentSolutions: React.FC<Props> = () => {
  return (
    <ul>
      <PaymentListItem>
        <CreditCardIcon width="3rem" height="3rem" />
      </PaymentListItem>
      <PaymentListItem>
        <MoneyBillIcon width="3rem" height="3rem" />
      </PaymentListItem>
      <PaymentListItem>
        <BankIcon width="3rem" height="3rem" />
      </PaymentListItem>
      <PaymentListItem>
        <MoneyCheckIcon width="3rem" height="3rem" />
      </PaymentListItem>
    </ul>
  );
};

export default PaymentSolutions;
