import React from 'react';
import styled from '@emotion/styled';
import Error from 'components/commons/Error';

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
  position: relative;
  margin: 0.5rem 0;
  margin-bottom: ${({ error }: { error: boolean }) => (error ? '0' : '0.5rem')};
`;

const IconWrapper = styled.div`
  background-color: ${({ error }: { error: boolean }) =>
    error ? '#ca3434' : '#4fb3c8'};
  padding: 1rem;
  height: 4rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  & * {
    color: white;
  }
`;

const Input = styled.input`
  background-color: #f4f4f4;
  border: 1px solid
    ${({ error }: { error: boolean }) => (error ? '#ca3434' : '#4fb3c8')};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 1rem;
  flex: 1;
  height: 4rem;
  font-size: 1.5rem;
  outline: none;
  width: 100%;
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
      <Root error={!!error}>
        <IconWrapper error={!!error}>
          <rest.icon height="2rem" width="2rem" />
        </IconWrapper>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          error={!!error}
        />
      </Root>
      {error && <Error error={error} />}
    </div>
  );
};

export default InputWithIcons;
