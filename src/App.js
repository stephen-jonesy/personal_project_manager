import './App.scss';
import React, { useState, useEffect } from 'react';
import { Header } from './common/Header/Header';
import { Subheader } from './common/Subheader/Subheader';
import { List } from './pages/list/List';
import { Register } from './pages/auth/Register';
import { Dashboard } from './pages/auth/Dashboard';
import { Timeline } from './pages/timeline/Timeline';
import { getUserThunk } from './features/user/userSlice';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.data);
  const isLoggedIn = useSelector(state => state.user.loggedIn);

  let token = sessionStorage.getItem('auth_token');

  console.log(isLoggedIn);

  console.log(userData);

  const getUser = () => {
    if (token != null) {
      dispatch(getUserThunk()).unwrap()
      .then((originalPromiseResult) => {
        console.log(originalPromiseResult);
        // handle result here
      })
  
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
        
      })

    }
    else {
      <Redirect to="/register" />
    }
  }

  useEffect(() => {
    getUser()
    console.log(token)

  }, []);

  // console.log(val)

  // const getUser = (e) =>  {

  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` }
  //   };

  //   axios.get(`http://127.0.0.1:8000/api/user`, config)
  //     .then(res => {
  //     const persons = res.data;
  //     const userName = persons.name;
  //     setUser(userName);
        
  //   })

  // }   

  return (
    <div className="App  d-flex">
      <Router>
        <Header/>     

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="col">
        <Subheader user={userData} />        
          <div className="d-flex justify-content-center">
            <Switch>
              <Route path="/timelines">
                <Timeline />
              </Route>
              <Route path="/register">
                
                {isLoggedIn ? <Redirect to="/" /> : <Register />}

              </Route>
              <Route exact path="/dashboard">
                {isLoggedIn ? <Dashboard /> : <Redirect to="/register" />}

              </Route>
              <Route path="/">
                {isLoggedIn ? <List /> : <Redirect to="/register" />}
              </Route>
            </Switch>
          </div>
        </div>

    </Router>

    </div>
  );
}

export default App;
