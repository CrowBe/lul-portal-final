import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/website/HomePage';
import SideNavbar from './components/website/SideNavbar';
import SiteFooter from './components/common/SiteFooter';
import ContactPage from './components/website/ContactPage';
import AboutPage from './components/website/AboutPage';
import TermsPage from './components/website/TermsPage';
// import ProjectPage from './components/website/ProjectPage';

const Website = () => {
    return (
        <div className="website">
            <header>
                <SideNavbar />
            </header>
            <Switch>
                <Route path="/contact-form" component={ContactPage}/>
                <Route path="/about-page" component={AboutPage} />
                <Route path="/terms-of-use" component={TermsPage} />
                {/* <Route path="/projects-feed" component={ProjectPage} /> */}
                <HomePage />
            </Switch>
            <footer>
                <SiteFooter />
            </footer>
        </div>
    );
};

export default Website;