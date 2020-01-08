import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import VideoBackground from '../layout/VideoBackground';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';

class HomePage extends Component {

    componentDidMount() {
        console.log(this.props.location.pathname)
    }

    render() {
        return (
            <>
                <header id="home-nav-sidebar">
                    <Link to="/">
                        <div className="home-nav-sidebar-button current-location"><span>Home</span></div>
                    </Link>
                    <Link to="/projects" >
                        <div className="home-nav-sidebar-button"><span>Projects</span></div>
                    </Link>
                    <Link to="/about" >
                        <div className="home-nav-sidebar-button"><span>About Us</span></div>
                    </Link>
                    <Link to="/staff" >
                        <div className="home-nav-sidebar-button"><span>Staff</span></div>
                    </Link>
                </header>
                <Switch>
                    <Route path={this.props.match.url} exact component={VideoBackground}/>
                    <Route path={`${this.props.match.url}projects`} exact={true} component={ProjectSection} />
                    <Route path={`${this.props.match.url}about`} component={AboutSection} />
                    {/* <Route path={`${match.url}/staff`} exact={true} component={careers} /> */}
                </Switch>
            </>
        )
    }
};

export default HomePage;