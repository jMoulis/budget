import React from 'react';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card-solid.svg';
import { ReactComponent as MoneyBillIcon } from 'assets/icons/money-bill-alt-solid.svg';
import { ReactComponent as BankIcon } from 'assets/icons/university-solid.svg';
import { ReactComponent as MoneyCheckIcon } from 'assets/icons/money-check-solid.svg';
import styled from '@emotion/styled';

interface Props {
  onSelect: (payment: string) => void;
  isSelected: string;
}

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

const PaymentSolutions: React.FC<Props> = ({ onSelect, isSelected }) => {
  return (
    <Root>
      <PaymentListItem
        onClick={() => onSelect('creditCard')}
        isSelected={isSelected}
      >
        <CreditCardIcon width="5rem" height="5rem" />
      </PaymentListItem>
      <PaymentListItem onClick={() => onSelect('cash')} isSelected={isSelected}>
        <MoneyBillIcon width="5rem" height="5rem" />
      </PaymentListItem>
      <PaymentListItem onClick={() => onSelect('bank')} isSelected={isSelected}>
        <BankIcon width="5rem" height="5rem" />
      </PaymentListItem>
      <PaymentListItem
        onClick={() => onSelect('moneyCheck')}
        isSelected={isSelected}
      >
        <MoneyCheckIcon width="5rem" height="5rem" />
      </PaymentListItem>
    </Root>
  );
};

export default PaymentSolutions;
