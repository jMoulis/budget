import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface Props {}
const Root = styled.div``;

const HomePage: React.FC<Props> = () => {
  return (
    <Root>
      <h1>HomePage</h1>
      <Link to='/expenses'>Expenses</Link>
    </Root>
  );
};

export default HomePage;
