import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content-logo">
          <Link to="/" className="home-link">
            FPS For Petes Sake
          </Link>
        </div>
        <div className="header__content-copy">
          ** What should go here? ideas? **
        </div>
      </div>
    </header>
  );
};

export default Header;
