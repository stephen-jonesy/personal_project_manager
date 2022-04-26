import './App.scss';
import React, { useState, useEffect } from 'react';
import { Header } from './common/Header/Header';
import { Subheader } from './common/Subheader/Subheader';
import { List } from './pages/list/List';
import { Register } from './pages/auth/Register';
import { Dashboard } from './pages/auth/Dashboard';
import { Timeline } from './pages/timeline/Timeline';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

function App() {

  let token = sessionStorage.getItem('auth_token');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (token != null) {
      getUser();
      setIsLoading(false);

    } else {
      setIsLoading(false);

    }

  }, []);

  // console.log(val)

  const getUser = (e) =>  {

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get(`http://127.0.0.1:8000/api/user`, config)
      .then(res => {
      const persons = res.data;
      const userName = persons.name;
      setUser(userName);
        
    })

  }   

  

  return (
    <div className="App  d-flex">
      <Router>
        <Header/>     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="col">
        <Subheader user={user} isLoading={isLoading}/>        
          <div className="d-flex justify-content-center">
            <Switch>
              <Route path="/timelines">
                <Timeline />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
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
