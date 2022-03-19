import React from 'react';
import CardWidget from '../CardWidget/CardWidget.js';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/category/collares">Collares</NavLink></li>
        <li><NavLink to="/category/aretes">Aretes</NavLink></li>
        <li><NavLink to="/category/anillos">Anillos</NavLink></li>
        <li><CardWidget /></li>
      </ul>
  );
};
export default NavBar;