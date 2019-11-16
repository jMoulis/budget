import React from 'react';
import MainContent from 'components/MainContent/MainContent';
import styled from '@emotion/styled';

interface Props {}
const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: #f4f4f4;
`;

const Income: React.FC<Props> = () => {
  return (
    <MainContent>
      <Input type="date" />
      <Input type="text" />
      <select>
        <option value="">Category</option>
        <option value="restaurant">Restaurant</option>
      </select>
    </MainContent>
  );
};

export default Income;
