import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';
import moment from 'moment';
import styled from '@emotion/styled';
import { SmallCards } from 'components/SmallCards';

const ListItem = styled.div`
  padding: 1rem;
  box-shadow: 0 1px 7px 2px rgba(82, 82, 82, 0.2);
  border-radius: 1rem;
  flex: 1;
  margin: 0.5rem;
  min-height: 10rem;
  max-height: 10rem;
  display: flex;
  justify-content: space-between;
`;

const Amount = styled.span`
  font-size: 2rem;
`;

const BudgetCategoryDetail: React.FC = () => {
  const { search } = useLocation();
  const [budget, setBudget] = useState(null);

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const { data } = await Axios.get(
          `http://localhost:8050/api/v1/budgets${search}`
        );
        setBudget(data.budget);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    if (search) {
      fetchBudget();
    }
  }, [search]);

  return (
    <>
      {budget && budget.transactions[0] && (
        <SmallCards
          category={budget.transactions[0].category}
          real={budget.transactions[0].totalReal}
          budget={budget.transactions[0].totalEstimated}
          score={budget.transactions[0].balance}
        />
      )}
      {budget &&
        budget.transactions[0].data.map(transaction => (
          <ListItem key={transaction._id}>
            <div>
              <h3>{transaction.label}</h3>
              <span>{moment(transaction.date).format('DD/MM/YYYY')}</span>
              <span>{transaction.location}</span>
            </div>
            <div>
              <Amount>{transaction.amount}</Amount>
              <span>{transaction.paymenSolution}</span>
            </div>
          </ListItem>
        ))}
    </>
  );
};

export default BudgetCategoryDetail;
