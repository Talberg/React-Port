import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav'
import About from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contacts'
import Container from './components/Container'

function App() {
  return (
    <Router>
      <Nav></Nav>
      
        <Switch>
       
          <Route exact path={["/","/about"]}><About/></Route>
          <Route exact path={'/contact'}><Contact></Contact></Route>
          <Route exact path={'/projects'}><Projects></Projects></Route>
          
        </Switch>
        
      </Router>
      
  );
}

export default App;
