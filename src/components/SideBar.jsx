import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <aside className='sidebar'>
      <h3 className='sidebar__title'>{props.title}</h3>
      <ul
        className={click ? `sidebar-menu sidebar-menu--active` : `sidebar-menu`}
      >
        <li className='sidebar-menu__item'>
          <Link to='/' className='nav-links'>
            Home
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link to='/HomeTheater' className='nav-links'>
            Home Theater
          </Link>
        </li>
        <li className='sidebar-menu__item'>
          <Link to='/GarageBar' className='nav-links'>
            Garage Bar
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
