import React from 'react';
import styled from '@emotion/styled';
import { useLocation, useHistory } from 'react-router-dom';

const Root = styled.header`
  grid-area: header;
`;
const Nav = styled.nav`
  display: flex;
  list-style: none;
`;
const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Root>
      <Nav>
        <li onClick={() => history.goBack()}>
          {location.pathname.replace('/homepage/', '')}
        </li>
      </Nav>
    </Root>
  );
};

export default Header;
