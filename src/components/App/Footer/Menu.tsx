import React, { useState } from 'react';
import styled from '@emotion/styled';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import Background from 'components/App/Footer/Background';
import isPropValid from '@emotion/is-prop-valid';

interface Props {}

const Root = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  right: 0;
  left: 0;
  bottom: 1rem;
`;

const Button = styled.button`
  border: none;
  background-color: #49d18f;
  border-radius: 100px;
  padding: 0.5rem;
  box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

interface PlusIconType {
  showMenu?: boolean;
}

const shouldForwardProp = (prop: string): boolean => isPropValid(prop);

const CustomPlusIcon = styled(PlusIcon, {
  shouldForwardProp,
})<PlusIconType>`
  transition: all 55ms ease-in;
  transform: ${({ showMenu }) => showMenu && 'rotate(45deg)'};
`;

const Menu: React.FC<Props> = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Root>
      {showMenu && <Background setShowMenu={setShowMenu} />}
      <Button onClick={() => setShowMenu(prevState => !prevState)}>
        <CustomPlusIcon showMenu={showMenu} height="5rem" width="5rem" />
      </Button>
    </Root>
  );
};

export default Menu;
