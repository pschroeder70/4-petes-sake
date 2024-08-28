import React, { useState } from "react";
import TheaterEquipment from "../components/TheaterEquipment";
import TheaterHome from "./TheaterHome";
import TV from "./TV";
import Reciever from "./Reciever";
import Speakers from "./Speakers";
import DVD from "./DVD";
import Game from "./Game";
import Computer from "./Computer";
import Remote from "./Remote";

function HomeTheater() {
  const [activeContent, setActiveContent] = useState("TheaterHome");

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
      <div className="content">
        <div className="theater-content">
          <h1>Home Theater</h1>
          <TheaterEquipment setActiveContent={setActiveContent} />
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default HomeTheater;
