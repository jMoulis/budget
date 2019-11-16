import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import MainContent from 'components/MainContent/MainContent';
import BudgetDetail from './BudgetDetail';
import BudgetListItem from './BudgetListItem';
import { SmallCards } from 'components/SmallCards';

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
        <MainContent header={() => <h1>Budgets</h1>}>
          {budgets &&
            budgets.transactions.map((transaction, index) => (
              <SmallCards
                category={transaction.category}
                real={transaction.totalReal}
                budget={transaction.totalEstimated}
                score={transaction.balance}
              />
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
