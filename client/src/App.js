import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavBar from './components/common/MainNavBar';
import Website from './Website';
import Portal from './Portal';

const App = () => {
  return (
    <Router>
      <header>
        <MainNavBar />
      </header>
      <Switch>
        <Route path="/portal" component={Portal} />
        <Route path="/" component={Website} />
      </Switch>
    </Router>
  );
}

export default App;
