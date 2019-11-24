import React from 'react';
import Menu from 'components/App/Footer/Menu';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { ReactComponent as IncomeIcon } from 'assets/icons/income.svg';
import { ReactComponent as ExpenseIcon } from 'assets/icons/expense.svg';
import { ReactComponent as BudgetIcon } from 'assets/icons/budget.svg';
import { ReactComponent as ParameterIcon } from 'assets/icons/parameter.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus-solid.svg';

interface Props {
  setMenu: () => void;
}

const Root = styled.footer`
  grid-area: footer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Button = styled(Link)`
  & * {
    color: white;
  }
`;

const AddButton = styled.button`
  color: #6ad796;
  border: none;
  background-color: transparent;
  & * {
    color: white;
  }
`;

const Footer: React.FC<Props> = ({ setMenu }) => {
  const roundButtons = [
    {
      icon: <BudgetIcon height="3.5rem" width="3.5rem" />,
      link: `/budget`,
    },
    {
      icon: <ParameterIcon height="3.5rem" width="3.5rem" />,
      link: `/parameter`,
    },
  ];
  return (
    <Root>
      <AddButton onClick={setMenu}>
        <PlusIcon height="3.5rem" width="3.5rem" />
      </AddButton>
      {roundButtons.map((button, index) => (
        <Button key={index} to={button.link}>
          {button.icon}
        </Button>
      ))}
    </Root>
  );
};

export default Footer;
