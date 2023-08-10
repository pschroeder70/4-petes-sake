import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <div className='logo'>4 Pete's Sake</div>
      <button className='navbar-menu--toggle' onClick={toggleNavbar}>
        Menu
      </button>
      <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <li className='navbar-menu__item'>
          <Link to='/' onClick={toggleNavbar}>
            Home
          </Link>
        </li>
        <li className='navbar-menu__item'>
          <Link to='/HomeTheater' onClick={toggleNavbar}>
            Home Theater
          </Link>
        </li>
        <li className='navbar-menu__item'>
          <Link to='/GarageBar' onClick={toggleNavbar}>
            Garage Bar
          </Link>
        </li>
        <li className='navbar-menu__item'>
          <Link to='/Movies' onClick={toggleNavbar}>
            Movie Collection
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
