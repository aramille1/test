import React from 'react';
import './App.scss';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Route component={Home} exact path="/"></Route>
      <Route component={About} path="/about"></Route>
      <Route component={Contacts} path="/contacts"></Route>

    </div>
  );
}

export default App;
