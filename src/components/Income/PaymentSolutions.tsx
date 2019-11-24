import React from 'react';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card-solid.svg';
import { ReactComponent as MoneyBillIcon } from 'assets/icons/money-bill-alt-solid.svg';
import { ReactComponent as BankIcon } from 'assets/icons/university-solid.svg';
import { ReactComponent as MoneyCheckIcon } from 'assets/icons/money-check-solid.svg';
import styled from '@emotion/styled';

interface Props {
  onSelect: (payment: string) => void;
  selected: string;
}

const Root = styled.ul`
  display: flex;
  margin: 0.5rem 0;
`;

const PaymentListItem = styled.li`
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '#F28A00' : '#4fb3c8'};
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:focus {
    background-color: #f28a00;
  }
  & * {
    color: #ffffff;
  }
`;

const PaymentSolutions: React.FC<Props> = ({ onSelect, selected }) => {
  return (
    <Root>
      <PaymentListItem
        tabIndex={0}
        onClick={() => onSelect('creditCard')}
        isSelected={selected === 'creditCard'}
      >
        <CreditCardIcon width="3rem" height="3rem" />
      </PaymentListItem>
      <PaymentListItem
        tabIndex={0}
        onClick={() => onSelect('cash')}
        isSelected={selected === 'cash'}
      >
        <MoneyBillIcon width="3rem" height="3rem" />
      </PaymentListItem>
      <PaymentListItem
        tabIndex={0}
        onClick={() => onSelect('bank')}
        isSelected={selected === 'bank'}
      >
        <BankIcon width="3rem" height="3rem" />
      </PaymentListItem>
      <PaymentListItem
        tabIndex={0}
        onClick={() => onSelect('moneyCheck')}
        isSelected={selected === 'moneyCheck'}
      >
        <MoneyCheckIcon width="3rem" height="3rem" />
      </PaymentListItem>
    </Root>
  );
};

export default PaymentSolutions;
