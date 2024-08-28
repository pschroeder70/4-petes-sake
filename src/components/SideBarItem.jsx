import React from "react";
import { Link } from "react-router-dom";

function SideBarItem(props) {
  return (
    <div className="sidebar-item">
      <Link to={props.link}>{props.title}</Link>
    </div>
  );
}

export default SideBarItem;
