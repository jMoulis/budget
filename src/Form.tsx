import React, { useState, SyntheticEvent, FormEvent, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

interface Props {
  history: any;
}

const Root = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form: React.FC<Props> = ({ history }) => {
  const [form, setForm] = useState({
    label: '',
    amount: '',
    file: '',
    category: ''
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('label', form.label);
      formData.append('amount', form.amount);
      formData.append('file', form.file);
      formData.append('category', form.category);
      const payload = await axios({
        method: 'post',
        data: formData,
        url: 'http://localhost:8050/api/v1/expenses'
      });
      setResponse(payload.data);
      setLoading(false);
    } catch (err) {
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError(err.message);
      }
      setLoading(false);
    }
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    if (currentTarget) {
      setForm(prevForm => ({
        ...prevForm,
        [currentTarget.name]: currentTarget.value
      }));
    }
  };

  const handleFileUpload = (event: FormEvent<HTMLInputElement>) => {
    const { currentTarget } = event;
    setForm(prevForm => ({
      ...prevForm,
      [currentTarget.name]: currentTarget.files ? currentTarget.files[0] : ''
    }));
  };

  useEffect(() => {
    if (response && !loading) {
      history.push('/expenses');
    }
  }, [response, loading]);

  return (
    <Root onSubmit={handleSubmit}>
      <label>
        Expense Label
        <input
          type='text'
          name='label'
          onChange={handleChange}
          value={form.label}
        />
        {error && error.label && <span>{error.label}</span>}
      </label>
      <label>
        Expense Category
        <input
          type='text'
          name='category'
          onChange={handleChange}
          value={form.category}
        />
        {error && error.category && <span>{error.category}</span>}
      </label>
      <label>
        Amount
        <input
          type='text'
          name='amount'
          onChange={handleChange}
          value={form.amount}
        />
        {error && error.amount && <span>{error.amount}</span>}
      </label>
      <label>
        Ticket
        <input type='file' name='file' onChange={handleFileUpload} />
      </label>
      <button type='submit'>Add</button>
    </Root>
  );
};

export default Form;
