import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

const App = ({ history }) => (
  <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Switch>
          <Route path="/auth/signin" component={Signin} />
          <Route path="/auth/signup" component={Signup} />
        </Switch>
      </div>
    </StylesProvider>
  </Router>
);
export default App;
