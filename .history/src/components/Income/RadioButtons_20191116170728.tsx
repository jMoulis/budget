import React from 'react';

interface Props {
  choices?: [{ value: string; label: string }];
  onClick: (label: string) => void;
}

const RadioButtons: React.FC<Props> = ({ choices, onClick }) => {
  return (
    <div>
      {choices.map((choice: { value: string; label: string }) => (
        <button
          key={choice.value}
          type="button"
          onClick={() => onClick(choice.value)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
};

export default RadioButtons;
