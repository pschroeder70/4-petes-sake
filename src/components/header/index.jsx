import Nav from '../nav';

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">4 Petes Sake</div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;