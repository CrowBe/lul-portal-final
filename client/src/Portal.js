import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import PortalNavBar from './components/portal/PortalNavbar';
import Profile from './components/portal/Profile';
import ExternalApi from './components/portal/ExternalApi';
import NewJob from './components/portal/NewJob';

const Portal = () => {
    return (
        <div className="portal" >
            <header>
                <PortalNavBar />
            </header>
            <Switch >
                <PrivateRoute path="/portal/profile" component={Profile} />
                <PrivateRoute path="/portal/external-api" component={ExternalApi} />
                <PrivateRoute path="/portal/new-job" component={NewJob} />
            </Switch>
        </div>
    )
}

export default Portal;