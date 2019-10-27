import React from 'react';
import Form from './Form';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import Expenses from './Expenses/Expenses';
import ExpenseDetail from './Expenses/ExpenseDetail';

const Root = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    'header'
    'content';
  grid-template-rows: 5rem 1fr;
`;

const Content = styled.div`
  grid-area: content;
`;
const App: React.FC = () => {
  return (
    <Root>
      <Header />
      <Content>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/expenses' component={Expenses} />
          <Route exact path='/expenses/new' component={Form} />
          <Route path='/expenses/:id' component={ExpenseDetail} />
        </Switch>
      </Content>
    </Root>
  );
};

export default App;
