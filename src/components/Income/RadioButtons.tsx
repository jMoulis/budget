import React from 'react';
import styled from '@emotion/styled';
import Error from 'components/commons/Error';

interface Props {
  choices: {
    value: string;
    label: string;
    selectedChoice: string;
    autoFocus?: boolean;
  }[];
  onClick: (label: string) => void;
  error?: string;
}

const Root = styled.div`
  position: relative;
  display: flex;
  & button:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  & button:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  & span {
    left: 0;
  }
  margin-bottom: ${({ error }: { error: boolean }) => (error ? '0' : '0.5rem')};
`;

const RadioButton = styled.button`
  border: none;
  flex: 1;
  padding: 1rem;
  background-color: ${({
    isSelected,
    error,
  }: {
    isSelected: boolean;
    error: boolean;
  }) => {
    if (error) {
      return '#ca3434';
    }
    return isSelected ? '#F28A00' : '#4fb3c8';
  }};
  &:focus {
    background-color: #f28a00;
  }
  color: white;
  font-size: 1.5rem;
`;

const RadioButtons: React.FC<Props> = ({ choices, onClick, error }) => {
  return (
    <div>
      <Root error={!!error}>
        {choices.map(
          (choice: {
            value: string;
            label: string;
            selectedChoice: string;
            autoFocus: boolean;
          }) => (
            <RadioButton
              error={!!error}
              tabIndex={0}
              autoFocus={choice.autoFocus}
              key={choice.value}
              type="button"
              onClick={() => onClick(choice.value)}
              isSelected={choice.selectedChoice === choice.value}
            >
              {choice.label}
            </RadioButton>
          )
        )}
      </Root>
      {error && <Error error={error} />}
    </div>
  );
};

export default RadioButtons;
