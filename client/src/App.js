import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import MainNavBar from './components/common/MainNavBar';
import PrivateRoute from './components/common/PrivateRoute';
import PortalNavBar from './components/portal/PortalNavbar';
import Profile from './components/portal/Profile';
import ExternalApi from './components/portal/ExternalApi';
import NewJob from './components/portal/NewJob';

const App = () => {
  return (
    <Router>
      	<header>
			<MainNavBar />
			<PortalNavBar />
      	</header>
			<Switch>
				<PrivateRoute path="/portal/profile" component={Profile} />
				<PrivateRoute path="/portal/external-api" component={ExternalApi} />
				<PrivateRoute path="/portal/new-job" component={NewJob} />
			</Switch>
    </Router>
  );
}

export default App;
