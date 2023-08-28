import React, { useState } from "react";
import TheaterEquipment from "../components/TheaterEquipment";
import TheaterHome from "./TheaterHome";
import TV from "./tv";
import Reciever from "./reciever";
import Speakers from "./speakers";
import DVD from "./dvd";
import Game from "./game";
import Computer from "./computer";
import Remote from "./Remote";

function HomeTheater() {
  const setActive = () => {
    this.classList.toggle("theater-item--active");
  };

  const [activeContent, setActiveContent] = useState("A");

  const renderContent = () => {
    if (activeContent === "TV") {
      return <TV />;
    } else if (activeContent === "Reciever") {
      return <Reciever />;
    } else if (activeContent === "Speakers") {
      return <Speakers />;
    } else if (activeContent === "DVD") {
      return <DVD />;
    } else if (activeContent === "Game") {
      return <Game />;
    } else if (activeContent === "Computer") {
      return <Computer />;
    } else if (activeContent === "Remote") {
      return <Remote />;
    } else {
      return <TheaterHome />;
    }
  };

  return (
    <>
      <div className='content'>
        <div className='theater-content'>
          <h1>Home Theater</h1>
          {renderContent()}
        </div>

        <aside className='theater-equipment'>
          <TheaterEquipment setActiveContent={setActiveContent} />
        </aside>
      </div>
    </>
  );
}

export default HomeTheater;
