import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppProvider from './providers';
import App from './App';

const Routes = () => {
  return (
    <Router>
      <AppProvider>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </AppProvider>
    </Router>
  );
};

export default Routes;
