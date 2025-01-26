import { useState } from "react";
import "./MemoryCard.css";

export const MemoryCard = ({ name, card, onCardClick }) => {
  const [isClickedCard, setIsClickedCard] = useState(false);

  const handleCardClick = () => {
    setIsClickedCard(true);
    onCardClick(card.id);
  };

  return (
    <div className="memory-card" onClick={handleCardClick}>
      {!isClickedCard ? name : card.name}
    </div>
  );
};
