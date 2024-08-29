import React, { useState } from "react";

function TheaterEquipment({ setActiveContent }) {
  const [activeContent, setActiveButton] = useState("");
  const handleContentChange = (content) => {
    setActiveContent(content);
    setActiveButton(content);
  };

  return (
    <div className="theater-equipment__list">
      <button
        className={`button ${activeContent === "TV" ? "button--active" : ""}`}
        onClick={() => handleContentChange("TV")}
      >
        Television
      </button>
      <button
        className={`button ${
          activeContent === "Reciever" ? "button--active" : ""
        }`}
        onClick={() => handleContentChange("Reciever")}
      >
        Reciever
      </button>
      <button
        className={`button ${
          activeContent === "Speakers" ? "button--active" : ""
        }`}
        onClick={() => handleContentChange("Speakers")}
      >
        Speakers
      </button>
      <button
        className={`button ${activeContent === "DVD" ? "button--active" : ""}`}
        onClick={() => handleContentChange("DVD")}
      >
        DVD
      </button>
      <button
        className={`button ${activeContent === "Game" ? "button--active" : ""}`}
        onClick={() => handleContentChange("Game")}
      >
        Game System
      </button>
      <button
        className={`button ${
          activeContent === "Computer" ? "button--active" : ""
        }`}
        onClick={() => handleContentChange("Computer")}
      >
        Computer
      </button>
      <button
        className={`button ${
          activeContent === "Remote" ? "button--active" : ""
        }`}
        onClick={() => handleContentChange("Remote")}
      >
        Remote
      </button>
    </div>
  );
}

export default TheaterEquipment;
