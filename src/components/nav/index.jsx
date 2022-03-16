import { Link } from 'react-router-dom';

const Nav = () => {
  function openMenu() {
    document.querySelector('.nav').classList.toggle('nav--open');
  }

  return (
    <nav className='nav'>
      <div className='nav__icon' onClick={openMenu}>
        <span></span>
        <ul className='nav__list'>
          <li className='nav__list-item'>
            <Link to='/movies'>Movies</Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/tv'>Theater</Link>
          </li>
          <li className='nav__list-item'>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
