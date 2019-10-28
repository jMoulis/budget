import React from 'react';
import styled from '@emotion/styled';
import { Link, useLocation, useHistory } from 'react-router-dom';

interface Props {}

const Root = styled.header`
  grid-area: header;
`;
const Nav = styled.nav`
  display: flex;
  list-style: none;
`;
const Header: React.FC<Props> = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <Root>
      <Nav>
        {location.pathname !== '/' && (
          <li>
            <button type='button' onClick={() => history.goBack()}>
              Back
            </button>
          </li>
        )}
        <li>
          <Link to='/'>HomePage</Link>
        </li>
      </Nav>
    </Root>
  );
};

export default Header;
