import Hero from "../hero";

const Header = (props) => {
  return (
    <header className="header">
    <div className="header__content">
      <div className="header__logo">FPS For Petes Sake</div>
      <Hero><a href='https://www.4PetesSakeShirts.etsy.com' target='_blank'>4 Petes Sake Shirts</a></Hero>
    </div>
  </header>
  );
};

export default Header;
