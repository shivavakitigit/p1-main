import { NavLink } from "react-router-dom";

const WinGame = () => {
  const handleRestartClick = () => {
    window.location.reload();
  };
  return (
    <section className="outcome-container">
      <div className="outcome-wrap">
        <h1>The checkered flag is yours - you've taken P1 in style!</h1>
        <NavLink className="restart-link" to="/game" onClick={handleRestartClick}>
          Restart Game
        </NavLink>
      </div>
    </section>
  );
};

export default WinGame;
