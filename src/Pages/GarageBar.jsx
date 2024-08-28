import GarageBarBar from "../images/garageBar.jpg"
import GarageBarSeats from "../images/garageBarLounge.jpg"

function GarageBar() {
  return (
    <>
      <div className="garage-bar">
        <h1>Garage Bar</h1>
        <p>I started calling it the 'Barage' but the wife killed that name, now it's just the Garage Bar.</p>
        <p>It's great in the summer, we have a screen that keeps the bugs out, and we don't have to sit in the sun.</p>
        <div className="garage-bar__pics">
          <picture>
            <source srcset={GarageBarBar} type='image/webp' />
            <img src={GarageBarBar} alt='' role="presentation" className="temp-pic" />
          </picture>
          <picture>
            <source srcset={GarageBarSeats} type='image/webp' />
            <img src={GarageBarSeats} alt='' role="presentation" className="temp-pic" />
          </picture>
        </div>
        <p>We have various card games, along with a large connect four, and darts (of course), even a snack rack, can't have a bar without snacks! Frozen margarita machine, fridge-freezer (usually two beer choices, more around Oktoberfest) and a decent selection of spirits.</p>
        <p>I run an app called <a href="https://mybarapp.com/" target="_blank">my Bar</a> that can track what spirits & mixers we have and what drinks can be made with them.</p>
      </div>
    </>
  );
}

export default GarageBar;
