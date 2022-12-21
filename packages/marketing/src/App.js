import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = ({ history }) => (
  <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </StylesProvider>
  </Router>
);
export default App;
