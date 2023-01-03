const Header = (props) => {
  return (
    <header className="header">
    <div className="header__content">
      <div className="header__logo">{props.headerTitle}</div>
      {props.children}
    </div>
  </header>
  );
};

export default Header;
