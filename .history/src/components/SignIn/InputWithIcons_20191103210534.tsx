import React from 'react';
import styled from '@emotion/styled';

interface Props {
  icon: any;
  type: string;
  placeholder: string;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const IconWrapper = styled.div`
  background-color: #4fb3c8;
  padding: 1rem;
  height: 5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  & * {
    color: white;
  }
`;

const Input = styled.input`
  background-color: #f4f4f4;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 1rem;
  flex: 1;
  height: 5rem;
  font-size: 2rem;
  outline: none;
`;

const InputWithIcons: React.FC<Props> = ({ type, placeholder, ...rest }) => {
  return (
    <Root>
      <IconWrapper>
        <rest.icon height="3rem" width="3rem" />
      </IconWrapper>
      <Input type={type} placeholder={placeholder} />
    </Root>
  );
};

export default InputWithIcons;
