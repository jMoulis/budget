import React from 'react';
import MainContent from 'components/MainContent/MainContent';
import styled from '@emotion/styled';

interface Props {}
const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: #f4f4f4;
`;
const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Income: React.FC<Props> = () => {
  return (
    <MainContent>
      <Form>
        <Input type="date" />
        <Input type="text" />
        <select>
          <option value="">Category</option>
          <option value="restaurant">Restaurant</option>
        </select>
      </Form>
    </MainContent>
  );
};

export default Income;
