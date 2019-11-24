import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as IncomeIcon } from 'assets/icons/income.svg';
import { ReactComponent as ExpenseIcon } from 'assets/icons/expense.svg';
import { ReactComponent as BudgetIcon } from 'assets/icons/budget.svg';
import { ReactComponent as ParameterIcon } from 'assets/icons/parameter.svg';
import { Link, useRouteMatch } from 'react-router-dom';

interface Props {
  setShowMenu: (bool: boolean) => void;
}

interface RoundButtonType {
  color: string;
}
const Root = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
`;

const RoundButton = styled.button<RoundButtonType>`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100rem;
  height: 6rem;
  width: 6rem;
  background-color: ${({ color }) => color};
  z-index: 10;
  border: none;
  & * {
    color: white;
  }
`;

const roundButtons = url => [
  {
    color: '#6AD796',
    icon: <IncomeIcon height="4rem" width="4rem" />,
    link: `/income`,
  },
  {
    color: '#A3408F',
    icon: <ExpenseIcon height="4rem" width="4rem" />,
    link: `/expense`,
  },
  {
    color: '#40A3A0',
    icon: <BudgetIcon height="4rem" width="4rem" />,
    link: `/budget`,
  },
  {
    color: '#647070',
    icon: <ParameterIcon height="4rem" width="4rem" />,
    link: `/parameter`,
  },
];

const Background: React.FC<Props> = ({ setShowMenu }) => {
  const { url } = useRouteMatch();
  return (
    <Root>
      {roundButtons(url).map((button, index) => (
        <RoundButton
          key={index}
          color={button.color}
          onClick={() => setShowMenu(false)}
        >
          <Link to={button.link}>{button.icon}</Link>
        </RoundButton>
      ))}
    </Root>
  );
};

export default Background;
