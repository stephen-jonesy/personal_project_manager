import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { Projects } from './features/projects/Projects';
import { Form } from './features/projects/CreateProjectForm';

import './App.css';


function App() {
  
  return (
    <div className="App container">
      <Form />
      <Projects />

    </div>
  );
}

export default App;
