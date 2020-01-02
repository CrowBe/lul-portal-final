import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VideoBackground from '../layout/VideoBackground';
import AboutSection from '../layout/AboutSection';

const HomePage = ({match}) => {
    console.log(match.url)
    return (
        <Switch>
            <Route path={match.url} exact component={VideoBackground}/>
            <Route path={`${match.url}about`} component={AboutSection} />
            {/* <Route path={`${match.url}/projects`} exact={true} component={Contact} />
            <Route path={`${match.url}/staff`} exact={true} component={careers} /> */}
        </Switch>
    )
};

export default HomePage;