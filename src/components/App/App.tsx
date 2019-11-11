import React from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from 'components/SignIn';
import Header from 'components/Header';
import Footer from 'components/App/Footer/Footer';
import Income from 'components/Income/Income';
import Expense from 'components/Expense/Expense';
import Budget from 'components/Budget/Budget';
import Parameter from 'components/Parameter/Parameter';

const Root = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 6rem 1fr 4rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'content' 'footer';
`;

const App: React.FC = () => {
  return (
    <Root>
      <Header />
      <Switch>
        <Route exact path="/">
          <Budget />
        </Route>
        <Route path="/budget">
          <Budget />
        </Route>
        <Route path="/income">
          <Income />
        </Route>
        <Route path="/expense">
          <Expense />
        </Route>
        <Route path="/parameter">
          <Parameter />
        </Route>
        <Route exact path="/signin" component={SignIn} />
      </Switch>
      <Footer />
    </Root>
  );
};

export default App;
