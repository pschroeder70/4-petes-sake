import React from "react";

import vizioj from "../images/vizio-70-E.jpg";
import vizio from "../images/vizio-70-E.webp";

function TV() {
  return (
    <>
      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h3>Vizio 70" E-Series TV</h3>
          <p>7.2ch 4K AV Receiver with Voice Control Compatibility</p>
          <p>
            I remember when I got this, I was psyched, 70" good god... It's been
            a few years, it's moved a few places, and it's still working great!
          </p>
        </div>
        <div className='home-theater__item-content home-theater__item-content--full'>
          <picture className='home-theater__item-image home-theater__item-image--full'>
            <source srcset={vizio} type='image/webp' />
            <img src={vizioj} alt='Vizio 70" E-Series TV' />
          </picture>
          <p>
            Experience lifelike color and stunning images with this 70-inch
            VIZIO 4K smart TV. It has Google Chromecast built in and supports
            Dolby Vision advanced HDR that optimizes each frame of video to
            ensure the best viewing experience. This VIZIO 4K smart TV supports
            voice controls via Google Assistant and Amazon Alexa.
          </p>
        </div>
      </div>
      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h4>Roku 4k Streaming stick</h4>
          <p>
            While the TV is smart, sometimes they don't have all the apps that I
            need.
          </p>
          <p>
            I am a huge fan of Roku, pretty sure I have one on every TV in the
            house.
          </p>
        </div>
      </div>
    </>
  );
}

export default TV;
