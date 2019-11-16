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
  height: 5rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: white;
  font-size: 1.5rem;
`;

const RadioButtons: React.FC<Props> = ({ choices, onClick }) => {
  return (
    <div>
      {choices.map((choice: { value: string; label: string }) => (
        <RadioButton
          key={choice.value}
          type="button"
          onClick={() => onClick(choice.value)}
        >
          {choice.label}
        </RadioButton>
      ))}
    </div>
  );
};

export default RadioButtons;
