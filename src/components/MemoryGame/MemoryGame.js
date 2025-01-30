import { useEffect, useState } from "react";
import { memoryCards } from "../../data/memoryCards";
import { SelectLevel } from "../SelectLevel/SelectLevel";
import { MemoryCardList } from "../GameBoard/memoryCardList/MemoryCardList";
import { FinishModal } from "../FinishModal/FinishModal";
import "./MemoryGame.css";

export const MemoryGame = () => {
  const [cards, setCards] = useState(memoryCards);
  const [isSelectLevel, setIsSelectLevel] = useState(false);
  const [isGameFinish, setIsGameFinish] = useState(false);

  const handleFilterCards = (level) => {
    const filteredCards = memoryCards.filter((card) => card.id <= level);
    setCards(filteredCards);
    setIsSelectLevel(true);
    setIsGameFinish(false);
  };

  const handleCardClick = (cardId) => {
    setCards((prevCards) => {
      return prevCards.map((card) =>
        card.id === cardId ? { ...card, isPredicted: true } : card
      );
    });
  };

  const handleStartGame = () => {
    setIsSelectLevel(false);
    setIsGameFinish(false);
    setCards(memoryCards);
  };

  useEffect(() => {
    const isFinish = cards.every((card) => card.isPredicted);
    setIsGameFinish(isFinish);
  }, [cards]);

  return (
    <div className="memory-game">
      <h1 className="memory-game__title">Memory Game</h1>
      {!isSelectLevel ? (
        <SelectLevel onFilterCards={handleFilterCards} />
      ) : (
        <MemoryCardList cards={cards} onCardClick={handleCardClick} />
      )}
      {isGameFinish && <FinishModal onClick={handleStartGame} />}
    </div>
  );
};
