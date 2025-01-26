import { useEffect, useState } from "react";
import { memoryCards } from "./data/memoryCards";
import { SelectLevel } from "./components/selectLevel/SelectLevel";
import { MemoryCardList } from "./components/gameBoard/MemoryCardList";
import { FinishGame } from "./components/gameBoard/FinishGame";
import "./App.css";

function App() {
  const [cards, setCards] = useState(memoryCards);
  const [isSelectLevel, setIsSelectLevel] = useState(false);
  const [isGameFinish, setIsGameFinish] = useState(false);

  const handleFilterCards = (level) => {
    const filteredCards = memoryCards.filter((card) => card.id <= level);
    setCards(filteredCards);
    setIsSelectLevel(true);
  };
  const handleCardClick = (cardId) => {
    setCards((prevCards) => {
      return prevCards.map((card) =>
        card.id === cardId ? { ...card, isPredicted: true } : card
      );
    });
  };
  console.log(cards);

  const checkGameFinished = () => {
    const isFinish = cards.every((card) => card.isPredicted);
    if (isFinish) {
      setIsGameFinish(true);
    }
  };

  const handleStartGame = () => {
    setIsSelectLevel(false);
    setIsGameFinish(false);
    setCards(memoryCards);
  };

  useEffect(() => {
    checkGameFinished();
  }, [cards]);

  return (
    <div className="app">
      <div className="memory-game">
        <h1 className="memory-game__title">Memory Game</h1>
        {!isSelectLevel ? (
          <SelectLevel onFilterCard={handleFilterCards} />
        ) : (
          <MemoryCardList cards={cards} onCardClick={handleCardClick} />
        )}
        {isGameFinish && <FinishGame onClick={handleStartGame} />}
      </div>
    </div>
  );
}

export default App;
