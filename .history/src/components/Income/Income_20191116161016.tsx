import React from 'react';
import MainContent from 'components/MainContent/MainContent';
import styled from '@emotion/styled';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar-alt-solid.svg';
import { ReactComponent as CategoryIcon } from 'assets/icons/tags-solid.svg';
import { ReactComponent as EuroIcon } from 'assets/icons/euro-sign-solid.svg';
import { ReactComponent as CameraIcon } from 'assets/icons/camera-retro-solid.svg';
import { ReactComponent as StreetIcon } from 'assets/icons/street-view-solid.svg';
import { ReactComponent as StoreIcon } from 'assets/icons/store-solid.svg';
import InputWithIcons from 'components/SignIn/InputWithIcons';
import PaymentSolutions from 'components/Income/PaymentSolutions';

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
  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {};
  return (
    <MainContent header={() => <h1>Nouvelle dépense</h1>}>
      <Form>
        <InputWithIcons
          icon={CalendarIcon}
          placeholder="Date"
          type="text"
          onChange={handleInputChange}
        />
        <InputWithIcons
          icon={CategoryIcon}
          placeholder="Category"
          type="text"
        />
        <span>Moyens de paiement</span>
        <PaymentSolutions />
        <InputWithIcons icon={EuroIcon} placeholder="Montant" type="text" />
        <InputWithIcons icon={StoreIcon} placeholder="Societe" type="text" />
        <InputWithIcons
          icon={StreetIcon}
          placeholder="Emplacement"
          type="text"
        />
        <InputWithIcons
          icon={CameraIcon}
          placeholder="Ajouter un document"
          type="text"
        />
      </Form>
    </MainContent>
  );
};

export default Income;
