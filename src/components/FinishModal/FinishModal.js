import winner from "../../assets/images/winner.png";
import "./FinishModal.css";

export const FinishModal = ({ onClick }) => {
  return (
    <div className="finish-modal" onClick={onClick}>
      <div className="finish-modal__backdrop">
        <div className="finish-modal__content">
          <img src={winner} alt="winner" className="finish-modal__img" />
          <h3 className="finish-modal__title">Game over!</h3>

          <button type="button" className="finish-modal__btn" onClick={onClick}>
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
};
