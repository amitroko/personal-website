import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import Coursework from './Coursework.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
      <div className="content">
        <Switch>
          <Route path="/coursework" component={Coursework}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
