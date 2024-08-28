import React from 'react'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="navbar-content">
        <div className='navbar-content__logo'>4 Pete's Sake</div>
        <a href='email:4-petes-sake@proton.me' className='button'>Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
