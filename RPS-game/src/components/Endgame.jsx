export default function Endgame({ newRound, choice, house, game }) {
  return (
    <div className="endgame">
      <div className="endgame--left">
        <span className="selected"> you picked</span>
        <div className={`icon icon--${choice} choice`}></div>
      </div>
      <div className="endgame--center">
        <p className="results">{game}</p>
        <button onClick={newRound} className="reset-btn">
          Play Again
        </button>
      </div>
      <div className="endgame--right">
        <span className="selected">the house picked</span>
        <div className={`icon icon--${house} house`}></div>
      </div>
    </div>
  );
}
