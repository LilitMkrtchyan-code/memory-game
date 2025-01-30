import { useState } from "react";
import "./SelectLevel.css";

export const SelectLevel = ({ onFilterCards }) => {
  const [selectedLevel, setSelectedLevel] = useState("6");

  const handleChangeLevel = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const levelNumber = parseInt(selectedLevel.split(" ")[0], 10);
    onFilterCards(levelNumber);
  };

  return (
    <div className="select-level">
      <form className="select-level__form" onSubmit={handleFormSubmit}>
        <label className="select-level__label">select difficulty level</label>
        <select
          className="select-level__select"
          value={selectedLevel}
          onChange={handleChangeLevel}
        >
          <option value="6 Cards">6 Cards</option>
          <option value="9 Cards">9 Cards</option>
          <option value="12 Cards">12 Cards</option>
        </select>
        <button type="submit" className="select-level__btn">
          start game
        </button>
      </form>
    </div>
  );
};
