import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <Link to='/movies'>Movies</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/tv'>Theater</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
