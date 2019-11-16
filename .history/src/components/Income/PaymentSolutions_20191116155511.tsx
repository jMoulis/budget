import React from 'react';
import { ReactComponent as CreditCardIcon } from 'assets/icons/credit-card-solid.svg';
interface Props {}

const PaymentSolutions: React.FC<Props> = () => {
  return (
    <ul>
      <li>
        <CreditCardIcon width="3rem" height="3rem" />
      </li>
    </ul>
  );
};

export default PaymentSolutions;
