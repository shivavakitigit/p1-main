import { NavLink } from "react-router-dom";

const LoseGame = () => {
  const handleRestartClick = () => {
    window.location.reload();
  };
  return (
    <section className="outcome-container">
      <div className="outcome-wrap">
        <h1>Don't worry, even Lewis Hamilton has bad days!</h1>
        <NavLink className="restart-link" to="/game" onClick={handleRestartClick}>
          Restart Game
        </NavLink>
      </div>
    </section>
  );
};

export default LoseGame;
