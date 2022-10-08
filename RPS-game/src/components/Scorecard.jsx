const Scorecard = ({ score }) => {
  return (
    <div className="card">
      <div className="card--section">
        <p className="card--title">rock</p>
        <p className="card--title">paper</p>{" "}
        <p className="card--title">scissors</p>
      </div>
      <div className="counter">
        <h2 className="counter--label">score</h2>
        <span className="counter--score">{score}</span>
      </div>
    </div>
  );
};

export default Scorecard;
