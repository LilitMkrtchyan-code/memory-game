export const Button = (props) => {
  const { children, type, onClick } = props;

  return (
    <button
      type={type ? type : "button"}
      className="game-btn"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
