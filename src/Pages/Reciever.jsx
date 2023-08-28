import React from "react";

import reciever from "../images/denon_avr_s750h_7_2.webp";
import recieverj from "../images/denon_avr_s750h_7_2.jpg";

function Reciever() {
  return (
    <div className='home-theater__item'>
      <div className='home-theater__item-title'>
        <h3>Denon AVR-S750H Receiver</h3>
        <p>7.2ch 4K AV Receiver with Voice Control Compatibility</p>
      </div>
      <div className='home-theater__item-content home-theater__item-content--full'>
        <picture className='home-theater__item-image home-theater__item-image--full'>
          <source srcset={reciever} type='image/webp' />
          <img src={recieverj} alt='Denon AVR-S750' />
        </picture>
        <p>
          The Denon AVR-S750H is a feature-packed AV receiver that includes
          support for 7.2 channels, Dolby Atmos and DTS:X audio formats, 4K
          Ultra HD passthrough with HDR10 and Dolby Vision compatibility,
          Audyssey MultEQ room calibration, HEOS wireless streaming, built-in
          Bluetooth, Wi-Fi connectivity, and compatibility with popular voice
          control assistants like Alexa, Google Assistant, and Siri for seamless
          integration into any home theater setup.
        </p>
        <p>
          Denon{" "}
          <a
            href='https://www.denon.com/en-us/product/archive-av-receivers/avrs750h/137265.html'
            target='_blank'
          >
            website
          </a>
        </p>
      </div>
    </div>
  );
}

export default Reciever;
