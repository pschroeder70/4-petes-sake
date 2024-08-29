import React, { useState } from "react";
import SideBarItem from "./SideBarItem";

function SideBar(props) {
  return (
    <nav className='sidebar'>
      <SideBarItem link='/' title='Home' />
      <SideBarItem link='/GarageBar' title='Garage Bar' />
      <SideBarItem link='/HomeTheater' title='Home Theater' />
      <SideBarItem link='/Movies' title='Movie Collection' />
    </nav>
  );
}

export default SideBar;
