import { useEffect, useState } from "react";
import { memoryCards } from "../../data/memoryCards";
import { SelectLevel } from "../selectLevel/SelectLevel";
import { MemoryCardList } from "./MemoryCardList";
import { FinishGame } from "./FinishGame";
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
    const checkGameFinished = () => {
      const isFinish = cards.every((card) => card.isPredicted);
      if (isFinish) {
        setIsGameFinish(true);
      }
    };
  
    checkGameFinished();
  }, [cards]);

  return (
    <div className="memory-game">
      <h1 className="memory-game__title">Memory Game</h1>
      {!isSelectLevel ? (
        <SelectLevel onFilterCards={handleFilterCards} />
      ) : (
        <MemoryCardList cards={cards} onCardClick={handleCardClick} />
      )}
      {isGameFinish && <FinishGame onClick={handleStartGame} />}
    </div>
  );
};
