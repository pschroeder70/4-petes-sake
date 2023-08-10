import { Link } from "react-router-dom";

import Navigation from "./Navigation";

const Header = (props) => {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__content-logo'>
          <Link to='/' className='home-link'>
            FPS For Petes Sake
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
