import React from "react";

function TheaterEquipment({ setActiveContent }) {
  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className='theater-equipment__list'>
      <button className="button" onClick={() => handleContentChange("TV")}>Television</button>
      <button className="button" onClick={() => handleContentChange("Reciever")}>Reciever</button>
      <button className="button" onClick={() => handleContentChange("Speakers")}>Speakers</button>
      <button className="button" onClick={() => handleContentChange("DVD")}>DVD</button>
      <button className="button" onClick={() => handleContentChange("Game")}>Game System</button>
      <button className="button" onClick={() => handleContentChange("Computer")}>Computer</button>
      <button className="button" onClick={() => handleContentChange("Remote")}>Remote</button>
    </div>
  );
}

export default TheaterEquipment;
