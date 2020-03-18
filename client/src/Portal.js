import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import PortalNavBar from './components/common/PortalNavbar';
import Profile from './components/pages/Profile';
import ExternalApi from './components/pages/ExternalApi';

const Portal = (props) => {
    return (
        <div className="portal" >
            <header>
                <PortalNavBar />
            </header>
            <Switch >
                <PrivateRoute path="/portal/profile" component={Profile} />
                <PrivateRoute path="/portal/external-api" component={ExternalApi} />
            </Switch>
        </div>
    )
}

export default Portal;