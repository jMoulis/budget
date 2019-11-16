import React from 'react';
import MainContent from 'components/MainContent/MainContent';

interface Props {}

const Income: React.FC<Props> = () => {
  return (
    <MainContent>
      <input type="date" />
      <input type="text" />
      <select>
        <option value="">Category</option>
        <option value="restaurant">Restaurant</option>
      </select>
    </MainContent>
  );
};

export default Income;
