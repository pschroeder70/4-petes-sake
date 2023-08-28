import React from "react";

function TheaterEquipment({ setActiveContent }) {
  const handleContentChange = (content) => {
    setActiveContent(content);
  };

  return (
    <div className='theater-equipment__list'>
      <span onClick={() => handleContentChange("TV")}>Television</span>
      <span onClick={() => handleContentChange("Reciever")}>Reciever</span>
      <span onClick={() => handleContentChange("Speakers")}>Speakers</span>
      <span onClick={() => handleContentChange("DVD")}>DVD</span>
      <span onClick={() => handleContentChange("Game")}>Game System</span>
      <span onClick={() => handleContentChange("Computer")}>Computer</span>
      <span onClick={() => handleContentChange("Remote")}>Remote</span>
    </div>
  );
}

export default TheaterEquipment;
