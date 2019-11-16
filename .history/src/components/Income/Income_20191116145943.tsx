import React from 'react';
import MainContent from 'components/MainContent/MainContent';
import styled from '@emotion/styled';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar-alt-solid.svg';
import { ReactComponent as CategoryIcon } from 'assets/icons/tags-solid.svg';
import InputWithIcons from 'components/SignIn/InputWithIcons';

interface Props {}

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: transparent;

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
  margin: 0.5rem;
`;

const Income: React.FC<Props> = () => {
  return (
    <MainContent>
      <Form>
        <InputWithIcons icon={CalendarIcon} placeholder="Date" type="text" />
        <InputWithIcons
          icon={CategoryIcon}
          placeholder="Category"
          type="text"
        />
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
