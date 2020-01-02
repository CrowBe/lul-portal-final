import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import PrivateRoute from './components/common/PrivateRoute';
import MainNavBar from './components/layout/MainNavBar';
import PortalNavBar from './components/layout/PortalNavbar';
import HomePage from './components/pages/HomePage';
import Profile from './components/pages/Profile';
import ExternalApi from './components/pages/ExternalApi';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <MainNavBar />
          <Route path="/portal" component={PortalNavBar}/>
        </header>
        <Switch>
          <Route path="/" component={HomePage}/>
          <PrivateRoute path="/portal/profile" component={Profile} exact/>
          <PrivateRoute path="/portal/external-api" component={ExternalApi} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
