import React from "react";

import sofabaton from "../images/sofabaton.webp";
import sofabatonj from "../images/sofabaton.jpg";

function Remote() {
  return (
    <div>
      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h4>SofaBaton X1 Universal Remote with Hub</h4>
          <p>
            All in One Smart Universal Remote Control with Customize Activities,
            Control Up to 60 IR/Bluetooth/WiFi Devices
          </p>
        </div>
        <div className='home-theater__item-content'>
          <picture className='home-theater__item-image home-theater__item-image--half'>
            <source srcset={sofabaton} type='image/webp' />
            <img src={sofabatonj} alt='SofaBaton X1' />
          </picture>
          <p>Update : I have gone back to my Logitech Harmony Elite.</p>
          <p>
            To be honest, I don't love it. My Logitech Harmony Elite was far
            more reliable, and I think about going back to it all the time. But
            since Logitech isn't supporting or making updates I switched.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Remote;
