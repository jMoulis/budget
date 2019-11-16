import React from 'react';
import styled from '@emotion/styled';
import Error from 'components/commons/Error';

interface Props {
  choices: { value: string; label: string; selectedChoice: string }[];
  onClick: (label: string) => void;
  error?: string;
}

const RadioButton = styled.button`
  border: none;
  padding: 1rem;
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? '#4fb3c8' : 'lightGray'};
  color: white;
  font-size: 1.5rem;
`;

const Root = styled.div`
  position: relative;
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
  margin-bottom: 1.5rem;
  /* & button:not(:last-of-type):not(:first-of-type) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  } */
`;

const RadioButtons: React.FC<Props> = ({ choices, onClick, error }) => {
  return (
    <Root>
      {choices.map(
        (choice: { value: string; label: string; selectedChoice: string }) => (
          <RadioButton
            key={choice.value}
            type="button"
            onClick={() => onClick(choice.value)}
            isSelected={choice.selectedChoice === choice.value}
          >
            {choice.label}
          </RadioButton>
        )
      )}
      {error && <Error error={error} />}
    </Root>
  );
};

export default RadioButtons;
