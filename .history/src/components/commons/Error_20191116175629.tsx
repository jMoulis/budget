import React from 'react';
import styled from '@emotion/styled';

interface Props {
  error: string;
}

const Root = styled.span`
  position: absolute;
  bottom: -1.8rem;
  color: #f11a00;
`;

const Error: React.FC<Props> = ({ error }) => {
  return <Root>{error}</Root>;
};

export default Error;
