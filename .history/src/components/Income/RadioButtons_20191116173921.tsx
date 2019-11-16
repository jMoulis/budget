import React from 'react';
import styled from '@emotion/styled';

interface Props {
  choices: { value: string; label: string }[];
  onClick: (label: string) => void;
}

const RadioButton = styled.button`
  border: none;
  padding: 1rem;
  background-color: #4fb3c8;
  color: white;
  font-size: 1.5rem;
`;

const Root = styled.div`
  & button:first-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  & button:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const RadioButtons: React.FC<Props> = ({ choices, onClick }) => {
  return (
    <Root>
      {choices.map((choice: { value: string; label: string }) => (
        <RadioButton
          key={choice.value}
          type="button"
          onClick={() => onClick(choice.value)}
        >
          {choice.label}
        </RadioButton>
      ))}
    </Root>
  );
};

export default RadioButtons;
