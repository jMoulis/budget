import React from 'react';
import styled from '@emotion/styled';

interface Props {
  header?: any;
}

const Root = styled.div`
  label: MainContent;
  grid-area: content;
  background-color: white;
  border-radius: 4rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  overflow: hidden;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  label: MainContentContent;
  display: flex;
  overflow: auto;
  height: 90%;
  flex-direction: column;
`;

const MainContent: React.FC<Props> = ({ header, children }) => {
  return (
    <Root>
      <Header>{header && header()}</Header>
      <Content>{children}</Content>
    </Root>
  );
};

export default MainContent;
