import React from 'react';

interface Props {
  choices?: [];
  onClick: (label: string) => void;
}

const RadioButtons: React.FC<Props> = ({ choices, onClick }) => {
  return (
    <div>
      {choices.map(choice => (
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
