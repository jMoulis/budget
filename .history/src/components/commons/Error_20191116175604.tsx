import React from 'react';
import styled from '@emotion/styled';

interface Props {}

const Root = styled.span`
  position: absolute;
  bottom: -1.8rem;
  color: #f11a00;
`;

const Error: React.FC<Props> = () => {
  return <Root></Root>;
};

export default Error;
