import React from 'react';
import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import About from './About.js';
import Coursework from './Coursework.js';
import Projects from './Projects.js';
import Genart from './Genart.js';
import Resume from './Resume.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
        <Switch>
            <Route path="/about" component={About}/>
            <Route path="/coursework" component={Coursework}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/genart" component={Genart}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/" component={About}/>
        </Switch>
        <Sidebar/>
    </Router>
  );
}

export default App;
