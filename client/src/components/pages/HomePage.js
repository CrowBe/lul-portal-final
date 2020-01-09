import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import VideoBackground from '../layout/VideoBackground';
import ProjectSection from '../layout/ProjectSection';
import AboutSection from '../layout/AboutSection';
import HomeNavbar from '../common/HomeNavbar';

const scrollEventLogger = (event) => console.log(event)

class HomePage extends Component {

    render() {
        return (
            <div className="home-page-wrapper" onWheel={scrollEventLogger} onTouchMove={scrollEventLogger} >
                <HomeNavbar />
                <Switch>
                    <Route path={this.props.match.url} exact component={VideoBackground}/>
                    <Route path={`${this.props.match.url}projects`} exact={true} component={ProjectSection} />
                    <Route path={`${this.props.match.url}about`} component={AboutSection} />
                    {/* <Route path={`${match.url}/staff`} exact={true} component={careers} /> */}
                </Switch>
            </div>
        )
    }
};

export default HomePage;