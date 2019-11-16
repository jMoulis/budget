import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, Switch, Route, useLocation } from 'react-router-dom';
import moment from 'moment';
import MainContent from 'components/MainContent/MainContent';
import Transactions from 'components/Budget/Transactions';
import FilterBar from './FilterBar';
import BudgetCategoryDetail from './BudgetCategoryDetail';

const BudgetDetail: React.FC = () => {
  const [budget, setBudget] = useState(null);
  const [filter, setFilter] = useState(null);

  const { budgetId } = useParams();
  const { search } = useLocation();

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
    if (budgetId) {
      fetchBudget();
    }
  }, [budgetId, search]);

  return (
    <Switch>
      <Route exact path={`/budget/${budgetId}`}>
        <MainContent
          header={() =>
            budget && (
              <>
                <span>
                  {`${moment(budget.date.month, 'MM').format('MMMM')} ${
                    budget.date.year
                  }`}
                </span>
                <FilterBar onClick={setFilter} selectedFilter={filter} />
              </>
            )
          }
        >
          {budget &&
            ['income', 'expense'].map((type, index) => (
              <Transactions
                key={index}
                transactions={budget.transactions}
                activeFilter={filter}
                transactionType={type}
              />
            ))}
        </MainContent>
      </Route>
      <Route path={`/budget/${budgetId}/:category`}>
        <MainContent
          header={() =>
            budget && (
              <>
                <span>
                  {`${moment(budget.date.month, 'MM').format('MMMM')} ${
                    budget.date.year
                  }`}
                </span>
              </>
            )
          }
        >
          <BudgetCategoryDetail />
        </MainContent>
      </Route>
    </Switch>
  );
};

export default BudgetDetail;
