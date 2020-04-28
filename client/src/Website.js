import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/website/HomePage';
import SideNavbar from './components/website/SideNavbar';
import SiteFooter from './components/common/SiteFooter';
import ContactPage from './components/website/ContactPage';
import AboutPage from './components/website/AboutPage';
import TermsPage from './components/website/TermsPage';
import ProjectsPage from './components/website/ProjectsPage';

const Website = () => {
    return (
        <div className="website">
            <header>
                <SideNavbar />
            </header>
            <Switch>
                <Route path="/contact-form" component={ContactPage}/>
                <Route path="/about-page" component={AboutPage} />
                <Route path="/terms-page" component={TermsPage} />
                <Route path="/projects-page" component={ProjectsPage} />
                <Route path="/" component={HomePage} exact/>
            </Switch>
            <footer>
                <SiteFooter />
            </footer>
        </div>
    );
};

export default Website;