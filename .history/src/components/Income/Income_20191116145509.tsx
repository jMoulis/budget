import React from 'react';
import MainContent from 'components/MainContent/MainContent';
import styled from '@emotion/styled';

interface Props {}

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: transparent;
  margin: 0.5rem;
  padding: 1rem;
  font-size: 1.5rem;
`;
const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  background-color: #f4f4f4;
`;

const Income: React.FC<Props> = () => {
  return (
    <MainContent>
      <Form>
        <FormGroup>
          <Input type="date" />
        </FormGroup>
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
