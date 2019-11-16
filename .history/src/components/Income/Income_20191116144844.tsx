import React from 'react';
import MainContent from 'components/MainContent/MainContent';

interface Props {}

const Income: React.FC<Props> = () => {
  return (
    <MainContent>
      <input type="date" />
    </MainContent>
  );
};

export default Income;
