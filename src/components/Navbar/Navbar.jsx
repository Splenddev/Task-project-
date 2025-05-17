import React, { useState } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [menu, setMenu] = useState('home');
  return (
    <nav className="navbar">
      <h1>LOGO</h1>
      <ul className="nav-link">
        {['home', 'cart', 'people'].map((navs, index) => (
          <li
            className={`${menu === navs ? 'active' : ''}`}
            key={index}
            onClick={() => setMenu(navs)}>
            {navs}
            <div className="indicator"></div>
          </li>
        ))}
      </ul>
      <button>Sign Out</button>
    </nav>
  );
};

export default Navbar;
