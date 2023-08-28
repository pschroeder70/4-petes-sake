import R625FA from "../images/R-625FA.webp";
import R625FAj from "../images/R-625FA.jpg";
import R12SW from "../images/R-12SW.webp";
import R12SWj from "../images/R-12SW.jpg";
import R52C from "../images/R-52C.webp";
import R52Cj from "../images/R-52C.jpg";
import R41M from "../images/R-41M_Pair.webp";
import R41Mj from "../images/R-41M_Pair.jpg";

function Speakers() {
  return (
    <div className='home-theater-speakers'>
      <h3>Klipsch Reference 5.1 Home Theater System</h3>
      <p>
        These are my joy, they bring so much to the party! I bought this as a
        set from Costco (I think) and it saved a TON of money.
      </p>

      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h4>R-625FA Dolby Atmos Floorstanding Speakers (2x)</h4>
        </div>
        <div className='home-theater__item-content'>
          <picture className='home-theater__item-image'>
            <source srcset={R625FA} type='image/webp' />
            <img
              src={R625FAj}
              alt='R-625FA Dolby Atmos Floorstanding Speakers'
            />
          </picture>
          <ul>
            <li>
              Built-in Elevation Channel for Dolby Atmos<sup>&reg;</sup>
            </li>
            <li>Dual 1" Aluminum Diaphragm Compression Tweeters</li>
            <li>
              Main Channel: 6.5" Copper Spun Magnetically Shielded IMG Woofers
            </li>
            <li>
              Height Channel: 5.25" Copper Spun Magnetically Shielded IMG
              Woofers
            </li>
            <li>90x90 Square Tractrix Horn</li>
            <li>
              Bass-Reflex via Rear-Firing Tractrix<sup>&reg;</sup> ports
            </li>
            <li>Strong, Flexible Removable Magnetic Grille</li>
            <li>Dimensions: 40” x 9.4” x 17.3”</li>
          </ul>
        </div>
      </div>

      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h4>R-12SW 12" 400W Powered Subwoofer</h4>
        </div>
        <div className='home-theater__item-content'>
          <picture className='home-theater__item-image'>
            <source srcset={R12SW} type='image/webp' />
            <img src={R12SWj} alt='R-12SW 12"' />
          </picture>
          <ul>
            <li>Powerful 12" copper-spun front-firing woofer</li>
            <li>All-digital amplifier delivers 400 watts of dynamic power</li>
            <li>Equally impressive with music and movies</li>
            <li>Low pass crossover and phase control</li>
            <li>Line/LFE inputs for compatibility with most receivers</li>
            <li>Dimensions: 16" H x 14" W x 18.5" D</li>
            <li>Brushed black polymer veneer cabinet</li>
          </ul>
        </div>
      </div>

      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h4>R-52C Two-Way Center Channel</h4>
        </div>
        <div className='home-theater__item-content'>
          <picture className='home-theater__item-image'>
            <source srcset={R52C} type='image/webp' />
            <img src={R52Cj} alt='R-52C' />
          </picture>
          <ul>
            <li>1" Aluminum LTS tweeter</li>
            <li>90x90 Square Tractrix Horn</li>
            <li>Dual 5.25" Spun-Copper IMG Woofers</li>
            <li>Strong, Flexible Removable Magnetic Grille</li>
            <li>Closed Back Design for Flexible Placement</li>
            <li>Dimensions: 7.3" x 18.75" x 7.6"</li>
          </ul>
        </div>
      </div>
      <div className='home-theater__item'>
        <div className='home-theater__item-title'>
          <h4>R-41M Bookshelf Speakers (2x)</h4>
        </div>
        <div className='home-theater__item-content'>
          <picture className='home-theater__item-image'>
            <source srcset={R41M} type='image/webp' />
            <img src={R41Mj} alt='R-52C' />
          </picture>
          <ul>
            <li>1" Aluminum LTS tweeters</li>
            <li>90x90 Square Tractrix Horns</li>
            <li>4" Spun-Copper</li>
            <li>Bass-Reflex via Rear-Firing Port</li>
            <li>Strong, Flexible Removable Magnetic Grille</li>
            <li>Dimensions: 11.3" x 5.75" x 7.9"</li>
          </ul>
        </div>
      </div>
      <div className='notes'>
        All info & images pulled from the
        <a
          href='https://www.klipsch.com/products/reference-dolby-atmos-home-theater-system'
          target='_blank'
        >
          Klipsch website
        </a>
      </div>
    </div>
  );
}

export default Speakers;
