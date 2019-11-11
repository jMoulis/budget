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

interface DotType {
  size: string;
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}
interface BlockType {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

interface RoundButtonType {
  position?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  color: string;
}
const Root = styled.div`
  background-color: #64e3df;
  width: 80%;
  height: 13rem;
  position: absolute;
  bottom: 3rem;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
`;

const Dot = styled.span<DotType>`
  position: absolute;
  display: block;
  height: ${({ size }) => {
    if (size === 'extra-small') return '7px';
    if (size === 'small') return '15px';
    return '40px';
  }};
  width: ${({ size }) => {
    if (size === 'extra-small') return '7px';
    if (size === 'small') return '15px';
    return '40px';
  }};
  border-radius: 100px;
  background-color: #64e3df;
  ${({ position }) => position && { ...position }}
`;

const Block = styled.div<BlockType>`
  position: absolute;
  z-index: 2;
  ${({ position }) => position && { ...position }}
`;

const RoundButton = styled.button<RoundButtonType>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 100rem;
  background-color: ${({ color }) => color};
  z-index: 10;
  border: none;
  ${({ position }) => position && { ...position }};
  & * {
    color: white;
  }
`;

const roundButtons = url => [
  {
    color: '#6AD796',
    position: {
      top: '41px',
      left: '-18px',
    },
    icon: <IncomeIcon height="4rem" width="4rem" />,
    link: `/income`,
  },
  {
    color: '#A3408F',
    position: {
      top: '-26px',
      left: '63px',
    },
    icon: <ExpenseIcon height="4rem" width="4rem" />,
    link: `/expense`,
  },
  {
    color: '#40A3A0',
    position: {
      top: '-26px',
      right: '56px',
    },
    icon: <BudgetIcon height="4rem" width="4rem" />,
    link: `/budget`,
  },
  {
    color: '#647070',
    position: {
      top: '41px',
      right: '-25px',
    },
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
          position={button.position}
          onClick={() => setShowMenu(false)}
        >
          <Link to={button.link}>{button.icon}</Link>
        </RoundButton>
      ))}
      <Block
        position={{
          bottom: '10px',
          left: '-4px',
        }}
      >
        <Dot
          size="extra-small"
          position={{
            bottom: '0px',
          }}
        />
        <Dot
          size="extra-small"
          position={{
            bottom: '-5px',
            left: '-3px',
          }}
        />
      </Block>
      <Block
        position={{
          bottom: '110px',
          left: '25px',
        }}
      >
        <Dot
          size="small"
          position={{
            bottom: '-10px',
            left: '25px',
          }}
        />
        <Dot size="big" />
        <Dot
          size="small"
          position={{
            bottom: '-7px',
            left: '7px',
          }}
        />
      </Block>
      <Block
        position={{
          top: '-10px',
          left: '140px',
        }}
      >
        <Dot
          size="small"
          position={{
            bottom: '-20px',
          }}
        />
        <Dot
          size="small"
          position={{
            bottom: '-13px',
            right: '-22px',
          }}
        />
        <Dot
          size="extra-small"
          position={{
            bottom: '-2px',
          }}
        />
      </Block>
      <Block
        position={{
          top: '19px',
          right: '54px',
        }}
      >
        <Dot size="big" />
        <Dot
          size="small"
          position={{
            left: '30px',
            top: '20px',
          }}
        />
      </Block>
      <Block
        position={{
          bottom: '18px',
          right: '8px',
        }}
      >
        <Dot size="small" />
      </Block>
    </Root>
  );
};

export default Background;
