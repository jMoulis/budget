import React from 'react';
import styled from '@emotion/styled';

interface Props {
  icon: any;
  type: string;
  placeholder: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  error?: any;
}

const Root = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  position: relative;
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

const Error = styled.span`
  position: absolute;
  bottom: -1.7rem;
  color: red;
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

const InputWithIcons: React.FC<Props> = ({
  type,
  placeholder,
  onChange,
  value,
  error,
  ...rest
}) => {
  return (
    <div>
      <Root>
        <IconWrapper>
          <rest.icon height="3rem" width="3rem" />
        </IconWrapper>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {error && <Error>{error}</Error>}
      </Root>
    </div>
  );
};

export default InputWithIcons;
