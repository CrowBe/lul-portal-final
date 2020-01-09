import React, { Component, useState, useEffect } from 'react';
import { Route, Switch, useLocation, useParams} from 'react-router-dom';
import MainSection from '../layout/MainSection';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';
import HomeNavbar from '../common/HomeNavbar';
import { CSSTransition } from 'react-transition-group';

const scrollEventLogger = (event) => console.log(event)



class HomePage extends Component {

render() {
    return (
        <div className="home-page-wrapper" onWheel={scrollEventLogger} onTouchMove={scrollEventLogger} >
            <HomeNavbar />
            <Switch>
                <Route path={this.props.match.url} exact component={MainSection}/>
                <Route path={`${this.props.match.url}projects`} exact={true} component={ProjectSection} />
                <Route path={`${this.props.match.url}about`} component={AboutSection} />
                {/* <Route path={`${match.url}/staff`} exact={true} component={careers} /> */}
            </Switch>
        </div>
    )
}
};

export default HomePage;