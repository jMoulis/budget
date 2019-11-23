import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MainContent from 'components/MainContent/MainContent';
import BudgetDetail from './BudgetDetail';
import BudgetListItem from './BudgetListItem';
import apiRoutes from 'api/apiRoutes';

const Budget: React.FC = () => {
  const [budgets, setBudgets] = useState({ budget: null, transactions: [] });
  const { path } = useRouteMatch();

  useEffect(() => {
    const fetchBudgets = async () => {
      try {
        const { data } = await apiRoutes.fetchBudgets();
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
        <MainContent
          header={() => (
            <div>
              <h1>List des budgets</h1>
              <span>Select Date</span>
            </div>
          )}
        >
          {budgets &&
            budgets.transactions.map((transaction, index) => (
              <BudgetListItem key={index} transaction={transaction} />
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
