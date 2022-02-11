import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { Projects } from './features/projects/Projects';

import './App.css';
import moment from 'moment';
moment().format();

function App() {
  const state = useSelector((state) => state.projects.value)
  const date = moment().format('DD/MM/YY HH:mm:ss');
  return (
    <div className="App">
      <Projects />

    </div>
  );
}

export default App;
