import React, { useState } from 'react';
import MainContent from 'components/MainContent/MainContent';
import styled from '@emotion/styled';
import { ReactComponent as CalendarIcon } from 'assets/icons/calendar-alt-solid.svg';
import { ReactComponent as CategoryIcon } from 'assets/icons/tags-solid.svg';
import { ReactComponent as EuroIcon } from 'assets/icons/euro-sign-solid.svg';
import { ReactComponent as CameraIcon } from 'assets/icons/camera-retro-solid.svg';
import { ReactComponent as StreetIcon } from 'assets/icons/street-view-solid.svg';
import { ReactComponent as StoreIcon } from 'assets/icons/store-solid.svg';
import { ReactComponent as TextIcon } from 'assets/icons/align-right-solid.svg';
import InputWithIcons from 'components/SignIn/InputWithIcons';
import PaymentSolutions from 'components/Income/PaymentSolutions';
import RadioButtons from 'components/Income/RadioButtons';
import Axios from 'axios';

interface Props {}

const Form = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
interface ButtonType {
  alignSelf?: string;
}
const Button = styled.button<ButtonType>`
  background-color: #df4c6d;
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  color: white;
  height: 5rem;
  align-self: ${({ alignSelf }) => alignSelf};
  padding: 1rem 2rem;
  font-weight: 700;
  margin: 1rem 0;
  cursor: pointer;
  &:hover {
  }
`;

const Error = styled.span`
  position: absolute;
  bottom: -1.8rem;
  color: red;
`;

const Relative = styled.span`
  position: relative;
`;

const Income: React.FC<Props> = () => {
  const inputForms = {
    date: '',
    label: '',
    category: '',
    paymentSolution: '',
    location: '',
    amount: '',
    companyName: '',
    transactionType: '',
  };
  const [form, setForm] = useState(inputForms);
  const [error, setError] = useState(inputForms);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await Axios.post('/transactions', form);
    } catch (err) {
      if (err.response.data) setError({ ...err.response.data.error });
      setError(err.message);
    }
  };
  return (
    <MainContent header={() => <h1>Nouvelle dépense</h1>}>
      <Form onSubmit={handleSubmit}>
        <Relative>
          <RadioButtons
            choices={[
              { label: 'Dépense', value: 'expense' },
              { label: 'Revenu', value: 'income' },
              { label: 'Revenu', value: 'income' },
            ]}
            onClick={transactionType =>
              setForm(prevForm => ({ ...prevForm, transactionType }))
            }
          />
          {error.transactionType && <Error>{error.transactionType}</Error>}
        </Relative>
        <InputWithIcons
          icon={CalendarIcon}
          placeholder="Date"
          type="text"
          value={form.date}
          error={error.date}
          onChange={({ currentTarget }) =>
            setForm(prevForm => ({ ...prevForm, date: currentTarget.value }))
          }
        />
        <InputWithIcons
          icon={TextIcon}
          placeholder="Désignation"
          type="text"
          value={form.label}
          error={error.label}
          onChange={({ currentTarget }) =>
            setForm(prevForm => ({ ...prevForm, label: currentTarget.value }))
          }
        />
        <InputWithIcons
          icon={CategoryIcon}
          placeholder="Category"
          type="text"
          value={form.category}
          error={error.category}
          onChange={({ currentTarget }) =>
            setForm(prevForm => ({
              ...prevForm,
              category: currentTarget.value,
            }))
          }
        />
        <span>Moyens de paiement</span>
        <PaymentSolutions />
        <InputWithIcons
          icon={EuroIcon}
          placeholder="Montant"
          type="text"
          value={form.amount}
          error={error.amount}
          onChange={({ currentTarget }) =>
            setForm(prevForm => ({ ...prevForm, amount: currentTarget.value }))
          }
        />
        <InputWithIcons
          icon={StoreIcon}
          placeholder="Societe"
          type="text"
          value={form.companyName}
          error={error.companyName}
          onChange={({ currentTarget }) =>
            setForm(prevForm => ({
              ...prevForm,
              companyName: currentTarget.value,
            }))
          }
        />
        <InputWithIcons
          icon={StreetIcon}
          placeholder="Emplacement"
          type="text"
          value={form.location}
          error={error.location}
          onChange={({ currentTarget }) =>
            setForm(prevForm => ({
              ...prevForm,
              location: currentTarget.value,
            }))
          }
        />
        <InputWithIcons
          icon={CameraIcon}
          placeholder="Ajouter un document"
          type="text"
        />
        <Button type="submit">Créer</Button>
        <Button type="button">Annuler</Button>
      </Form>
    </MainContent>
  );
};

export default Income;
