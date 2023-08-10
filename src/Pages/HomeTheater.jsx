import React from "react";

function HomeTheater() {
  return (
    <div className='content'>
      <h2>Home Theater</h2>
      <ul className='theater-list'>
        <li>Vizio 70" E-Series TV</li>
        <li>Denon AVR-S750 H Reciever</li>
        <li>
          Klipsch Reference 5.1 Home Theater System :
          <ul className='theater-list--inner'>
            <li>R-625FA Dolby Atmos Floorstanding Speaker (2x)</li>
            <li>R-12SW 12" 400W Powered Subwoofer</li>
            <li>R-52C Two-Way Center Channel</li>
            <li>R-41M Bookshelf Speakers (2x)</li>
          </ul>
        </li>
        <li>Roku Streaming Stick 4K</li>
        <li>Panasonic DP-UB820 4k DVD</li>
        <li>Roku </li>
        <li>X-Box Series S</li>
        <li>Chromebox</li>
      </ul>
    </div>
  );
}

export default HomeTheater;
