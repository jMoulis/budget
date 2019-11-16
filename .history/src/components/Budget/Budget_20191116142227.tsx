import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import MainContent from 'components/MainContent/MainContent';
import BudgetDetail from './BudgetDetail';
import BudgetListItem from './BudgetListItem';

const Budget: React.FC = () => {
  const [budgets, setBudgets] = useState({ budget: null, transactions: [] });
  const { path } = useRouteMatch();

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const { data } = await Axios.get(
          'http://localhost:8050/api/v1/budgets'
        );
        setBudgets(data.budget);
      } catch (error) {
        console.log('Error', error.message);
      }
    };
    fetchBudgets();
  }, []);

  return (
    <Switch>
      <Route exact path={path}>
        <MainContent>
          {budgets &&
            budgets.transactions.map((transaction, index) => (
              <BudgetListItem key={transaction._id} transaction={transaction} />
            ))}
        </MainContent>
      </Route>
      <Route path="/budget/:budgetId">
        <BudgetDetail />
      </Route>
    </Switch>
  );
};

export default Budget;
