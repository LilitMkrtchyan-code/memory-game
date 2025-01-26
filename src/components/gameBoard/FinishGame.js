import winner from "../../assets/images/winner.png";
import "./FinishGame.css";

export const FinishGame = ({ onClick }) => {
  return (
    <div className="finish-game">
      <div className="finish-game__content">
        <h3 className="finish-game__title">Game over!</h3>
        <img src={winner} alt="winner" className="finish-game__img" />
      </div>
      <button type="button" className="finish-game__btn" onClick={onClick}>
        Start Again
      </button>
    </div>
  );
};
