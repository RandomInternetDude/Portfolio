import React from 'react';
import logo from '../../assets/img/JRlogo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './navElements';




export default function NewNavBar() {
    return (
    
    <>               
    <Nav> 

        <NavLink to='/'>
          {/* <img src={require('../../images/logo.svg')} alt='logo' /> */}
        </NavLink>
        <Bars />
        <NavMenu>                     
        <NavLink to="/aboutme" activeStyle>
                About
        </NavLink>
        <NavLink to="/resume" activeStyle>
                Resume
        </NavLink>
        <NavLink to="/projects" activeStyle>
                Projects
        </NavLink>
        <NavLink to="/metrics" activeStyle>
                Metrics
        </NavLink>
        <NavLink to="/contact" activeStyle>
                Contact
        </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/'>Joey Rivera</NavBtnLink>
        </NavBtn>
    </Nav> 

     </>)
}