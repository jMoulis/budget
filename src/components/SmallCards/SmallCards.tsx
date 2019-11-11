import React from 'react';
import styled from '@emotion/styled';
import girlHappy from 'assets/images/girlHappy.png';
import girlSad from 'assets/images/girlSad.png';

const Root = styled.div`
  label: SmallCards;
  display: flex;
  padding: 1rem;
  box-shadow: 0 1px 7px 2px rgba(82, 82, 82, 0.2);
  border-radius: 2rem;
  flex: 1;
  margin: 0.5rem;
  min-height: 15rem;
  max-height: 15rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  flex: 1;
`;

const Avatar = styled.img`
  display: block;
  height: 5rem;
`;

interface BadgeType {
  isNegative?: boolean;
}

const Badge = styled.span<BadgeType>`
  display: flex;
  background-color: ${({ isNegative }) => (isNegative ? '#F11A00' : '#55b891')};
  color: white;
  border-radius: 100px;
  text-align: center;
  font-size: 2.5rem;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  min-width: 8rem;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 2.5rem;
`;

const Amount = styled.span`
  font-size: 2rem;
  justify-content: flex-end;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 5rem 1fr;
  /* justify-content: space-between; */
  align-items: center;
`;

interface Props {
  category: string;
  real?: number;
  budget?: number;
  score?: number;
}

const SmallCards: React.FC<Props> = ({ category, real, budget, score }) => {
  return (
    // <Link to={`/budget/${id}/${category}`}>
    <Root>
      <Header>
        <Avatar src={score < 0 ? girlSad : girlHappy} />
        <Badge isNegative={score < 0}>{score}</Badge>
      </Header>
      <Content>
        <Title>{category}</Title>
        <ul>
          <ListItem>
            <span>Réel</span>
            <Amount>{real}</Amount>
          </ListItem>
          <ListItem>
            <span>Prévi</span>
            <Amount>{budget}</Amount>
          </ListItem>
        </ul>
      </Content>
    </Root>
    // </Link>
  );
};

export default SmallCards;
