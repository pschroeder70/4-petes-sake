import React from "react";
import EntertainmentCenter from "../images/entertainmentCenter.jpg";

function TheaterHome() {
  return (
    <div>
      <p>
        Welcome to my home theater page, you can see a list of items above this, click on them to get a better description.</p>
      <p>This was a pretty budget friendly build up.</p>
      <picture>
          <source srcset={EntertainmentCenter} type='image/webp' />
          <img src={EntertainmentCenter} alt='' role="presentation" className="temp-pic" />
      </picture>
    </div>
  );
}

export default TheaterHome;
