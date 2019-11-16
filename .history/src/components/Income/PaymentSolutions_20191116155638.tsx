import React from 'react';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card-solid.svg';
import { ReactComponent as MoneyBillIcon } from 'assets/icons/money-bill-alt-solid.svg';
import { ReactComponent as BankIcon } from 'assets/icons/university-solid.svg';
import { ReactComponent as MoneyCheckIcon } from 'assets/icons/money-check-solid.svg';
interface Props {}

const PaymentSolutions: React.FC<Props> = () => {
  return (
    <ul>
      <li>
        <CreditCardIcon width="3rem" height="3rem" />
      </li>
      <li>
        <MoneyBillIcon width="3rem" height="3rem" />
      </li>
      <li>
        <BankIcon width="3rem" height="3rem" />
      </li>
      <li>
        <MoneyCheckIcon width="3rem" height="3rem" />
      </li>
    </ul>
  );
};

export default PaymentSolutions;
