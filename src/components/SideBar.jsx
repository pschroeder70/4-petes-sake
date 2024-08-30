import React, { useState } from "react";
import SideBarItem from "./SideBarItem";

function SideBar(props) {
  return (
    <nav className='sidebar'>
      <SideBarItem link='/' title='Home' />
      <SideBarItem link='/GarageBar' title='Garage Bar' />
      <SideBarItem link='/HomeTheater' title='Home Theater' />
      <SideBarItem link='/MovieList' title='Movie Collection' />
      <SideBarItem link='/MovieSearch' title='Movie Search' hidden='true' />
    </nav>
  );
}

export default SideBar;
