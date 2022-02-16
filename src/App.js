import React, { useState } from 'react';
import logo from './logo.svg';
import {useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Projects } from './features/projects/Projects';
import './App.css';


function App() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="App container">
      <Projects />

    </div>
  );
}

export default App;
