import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Switch, Route } from 'react-router-dom';
import { SignIn } from 'components/SignIn';
import Header from 'components/Header';
import Footer from 'components/App/Footer/Footer';
import Income from 'components/Income/Income';
import Expense from 'components/Expense/Expense';
import Budget from 'components/Budget/Budget';
import AddMenu from 'components/App/AddMenu/AddMenu';
import Parameter from 'components/Parameter/Parameter';

const Root = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 4rem 1fr 5rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'header' 'content' 'footer';
  position: relative;
`;

const App: React.FC = () => {
  const [menu, setMenu] = useState(false);
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
        {/* <Route path="/income">
          <Income />
        </Route> */}
        <Route path="/parameter">
          <Parameter />
        </Route>
        <Route exact path="/signin" component={SignIn} />
      </Switch>
      {menu && <AddMenu setMenu={() => setMenu(false)} />}
      <Footer setMenu={() => setMenu(true)} />
    </Root>
  );
};

export default App;
