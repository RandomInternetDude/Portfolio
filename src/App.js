import React, { useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import './assets/bootstrap/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import NewNavBar from './components/newNavBar/newNavBar';
import Default from './components/Default404/Default';
import Mission from './components/Mission/Mission';
// import ProjectUC from './components/Projects/ProjectUC';
import Contact from './components/ContactForm/Contacts';
import Resume from './components/Resume/Resume';
import projects from './components/Projects/Projects';
import Metrics from './components/Metrics/Metrics';
import Aboutme from './components/Aboutme/Aboutme';
import Dropdown from './components/newNavBar/DropDown/DropDown';


function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  
  
  const toggle = () =>{
    setIsOpen(!isOpen)
  }



    return (
      <React.Fragment>
          {/* <Navbar></Navbar> */}
          <NewNavBar toggle={toggle}/>
          <Dropdown isOpen={isOpen} toggle={toggle}/>
          <Switch>
            <Route exact path="/" component={Mission} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/aboutme" component={Aboutme} />
            <Route path="/metrics" component={Metrics} />
            <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }


export default App;
