import { Link } from 'react-router-dom';

const Nav = (props) => {
  function openMenu(e) {
    e.currentTarget.classList.toggle('nav__icon--open');
  }

  return (
    <nav data-module='nav'>
      <div className='nav__icon' onClick={openMenu}>
        <span></span>
        <ul className='list list--nav'>
          <li className='list__item'>
            <Link to='/movies'>Movies</Link>
          </li>
          <li className='list__item'>
            <Link to='/tv'>Theater</Link>
          </li>
          <li className='list__item'>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
