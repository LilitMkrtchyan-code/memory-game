import { useState } from "react";
import "./MemoryCard.css";

export const MemoryCard = ({ name, card, onCardClick, isWordHidden }) => {
  const [isClickedCard, setIsClickedCard] = useState(false);

  const handleCardClick = () => {
    if (isWordHidden) {
      setIsClickedCard(true);
      onCardClick(card.id);
    }
  };

  return (
    <div className="memory-card" onClick={handleCardClick}>
      {!isClickedCard ? name : card.name}
    </div>
  );
};
