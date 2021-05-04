import React from 'react';
import logo from '../../assets/img/JRlogo.png';
import { menuData } from './navbarData';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './navElements';




export default function NewNavBar({ toggle }) {
    return (
    
    <>               
    <Nav> 

        <NavLink to='/'>
          Joey Rivera
        </NavLink>
        <Bars  onClick={ toggle }/>
        <NavMenu>      
         {menuData.map((item, index) => (
        <NavLink to={item.link} key={index}>
                {item.title}
        </NavLink>    
         ))}       
        </NavMenu>
    </Nav> 

     </>)
}