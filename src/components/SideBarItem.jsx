import React from "react";
import { Link } from "react-router-dom";

function SideBarItem(props) {
  return (
    <Link className="button button--large" to={props.link}>{props.title}</Link>
  );
}

export default SideBarItem;
