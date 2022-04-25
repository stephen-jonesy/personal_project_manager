import './App.scss';
import React, { useState, useEffect } from 'react';
import { Header } from './common/Header/Header';
import { List } from './pages/list/List';
import { Register } from './pages/auth/Register';
import { Dashboard } from './pages/auth/Dashboard';
import { Timeline } from './pages/timeline/Timeline';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {

  let data = sessionStorage.getItem('auth_token');
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    if (data != null) {
      setLoggedIn(true);
    } 

  }, []) 

  return (
    <div className="App  d-flex">
      <Router>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="col">
          <div className="sub-header"></div>
          <div className="d-flex justify-content-center">
            <Switch>
              <Route path="/timelines">
                <Timeline />
              </Route>
              <Route path="/register">
                {loggedIn ? <Redirect to="/dashboard" /> : <Register />  }
              </Route>
              <Route exact path="/dashboard">
                {loggedIn ? <Dashboard /> : <Redirect to="/register" /> }
              </Route>
              <Route path="/">
                <List />
              </Route>
            </Switch>
          </div>
        </div>

    </Router>

    </div>
  );
}

export default App;
