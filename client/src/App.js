import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainNavBar from './components/common/MainNavBar';
import Website from './Website';
import Portal from './Portal';
import history from './utils/history';


const App = () => {
  return (
    <Router history={history}>
      <header>
        <MainNavBar />
      </header>
      <Switch>
        <Route path="/portal" component={Portal} />
        <Route path="/" component={Website} history={history} />
      </Switch>
    </Router>
  );
}

export default App;
