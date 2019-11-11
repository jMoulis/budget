import React from 'react';
import Menu from 'components/App/Footer/Menu';
import styled from '@emotion/styled';

interface Props {}

const Root = styled.footer`
  grid-area: footer;
  position: relative;
`;

const Footer: React.FC<Props> = () => {
  return (
    <Root>
      <Menu />
    </Root>
  );
};

export default Footer;
