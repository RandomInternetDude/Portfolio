import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #323F4B;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
  color: #fff;
  background: #323F4B;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  padding: 0 1rem;
  font-size: large;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
  &:hover{
    text-decoration: none;
    transform: scale(1.02);
    color: #d3CEC4;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  transition: 0.2s ease-in-out;
  &:hover{
    color:#15cdfc;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-155%, 105%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  background: #323F4B;
  align-items: center;
  justify-content: space-between;
  // margin-right: -24px;
  /* Second Nav */
  margin-right: 24px; 
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  background: #323F4B;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transform: scale(1.1); 
    text-decoration: none;
    background: #fff;
    color: #010606;
  }
`;