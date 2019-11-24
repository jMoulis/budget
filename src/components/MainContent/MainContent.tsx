import React from 'react';
import styled from '@emotion/styled';
import Menu from 'components/App/Footer/Menu';

interface Props {
  header?: any;
}

const Root = styled.div`
  label: MainContent;
  grid-area: content;
  background-color: white;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  overflow: hidden;
  position: relative;
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  label: MainContentContent;
  display: flex;
  overflow: auto;
  height: 100%;
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
