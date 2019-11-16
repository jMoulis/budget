import React from 'react';
import styled from '@emotion/styled';

interface Props {
  choices: { value: string; label: string; selectedChoice: string }[];
  onClick: (label: string) => void;
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
  & button:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  & button:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  margin-bottom: 1rem;
  /* & button:not(:last-of-type):not(:first-of-type) {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  } */
`;

const RadioButtons: React.FC<Props> = ({ choices, onClick }) => {
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
    </Root>
  );
};

export default RadioButtons;
