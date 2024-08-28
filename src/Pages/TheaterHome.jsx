import React from "react";
import EntertainmentCenter from "../images/entertainmentCenter.jpg";

function TheaterHome() {
  return (
    <div>
      <p>
        Welcome to my home theater page, you can see a list of items above this,
        click on them to get a better description. This was a pretty budget
        friendly build up.
      </p>
      <picture>
        <source srcset={EntertainmentCenter} type="image/webp" />
        <img
          src={EntertainmentCenter}
          role="presentation"
          alt="picture of my set up"
          className=""
        />
      </picture>
    </div>
  );
}

export default TheaterHome;
