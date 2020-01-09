import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import PrivateRoute from './components/common/PrivateRoute';
import MainNavBar from './components/common/MainNavBar';
import PortalNavBar from './components/common/PortalNavbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
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
          <PrivateRoute path="/portal/profile" component={Profile} exact/>
          <PrivateRoute path="/portal/external-api" component={ExternalApi} exact/>
          <Route path="/about-page" component={AboutPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
      <footer id="sitewide-footer">
        <p>
          Copyright - Looking Up Landscapes
        </p>
      </footer>
    </div>
  );
}

export default App;
