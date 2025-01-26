import { useState } from "react";
import { MemoryCard } from "./MemoryCard";
import "./MemoryCardList.css";

export const MemoryCardList = ({ cards, onCardClick, onCheckGame }) => {
  const [isWordHidden, setIsWordHidden] = useState(false);

  const handleHide = () => {
    setIsWordHidden(true);
  };

  return (
    <div className="card-list-container">
      {!isWordHidden ? (
        <button type="button" onClick={handleHide} className="card-list__btn">
          Hide
        </button>
      ) : (
        <div className="card-list__subtitle">
          Start guessing by clicking on the cards!
        </div>
      )}

      <div className="card-list">
        {cards.map((card) => {
          return (
            <MemoryCard
              key={card.id}
              name={!isWordHidden ? card.name : "?"}
              card={card}
              onCardClick={onCardClick}
              isWordHidden={isWordHidden}
            />
          );
        })}
      </div>
    </div>
  );
};
