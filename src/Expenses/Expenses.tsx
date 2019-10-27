import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import axios from 'axios';
interface Props {
  match: any;
}

const Root = styled.div``;

const Expenses: React.FC<Props> = ({ match }) => {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const payload = await axios.get(
          'http://localhost:8050/api/v1/expenses'
        );
        setExpenses(payload.data.expenses);
      } catch (err) {
        setError(err);
      }
    };
    fetchExpenses();
  }, []);

  return (
    <Root>
      <ul>
        {expenses &&
          expenses.map((expense: any) => (
            <li key={expense._id}>
              <Link to={`${match.path}/${expense._id}`}>{expense.label}</Link>
            </li>
          ))}
      </ul>
      <Link to='/expenses/new'>New Expense</Link>
    </Root>
  );
};

export default Expenses;
