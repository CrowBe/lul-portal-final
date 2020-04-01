import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SideNavbar from './components/common/SideNavbar';
import SiteFooter from './components/common/SiteFooter';
import ContactPage from './components/pages/ContactPage';
import AboutPage from './components/pages/AboutPage';
import TermsPage from './components/pages/TermsPage'

const Website = (props) => {
    const { history } = props;
    return (
        <div className="website">
            <header>
                <SideNavbar />
            </header>
            <Switch>
                <Route path="/contact-form" component={ContactPage}/>
                <Route path="/about-page" component={AboutPage} />
                <Route path="/terms-of-use" component={TermsPage} />
                <HomePage history={history} />
            </Switch>
            <footer>
                <SiteFooter />
            </footer>
        </div>
    );
};

export default Website;