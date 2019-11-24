import React from 'react';
import styled from '@emotion/styled';

interface Props {
  error: string;
}

const Root = styled.span`
  font-size: 1rem;
  color: #ca3434;
  display: block;
`;

const Error: React.FC<Props> = ({ error }) => {
  return <Root>{error}</Root>;
};

export default Error;
