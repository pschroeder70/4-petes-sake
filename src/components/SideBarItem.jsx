import React from "react";
import { NavLink } from "react-router-dom";

function SideBarItem({ link, title }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? "button button--large button--active"
          : "button button--large"
      }
      exact="true" // Ensure exact matching for the root path
    >
      {title}
    </NavLink>
  );
}

export default SideBarItem;
