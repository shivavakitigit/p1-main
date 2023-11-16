const GameInstructions = ({ toggleInstructions, showInstructions }) => {
  if (showInstructions) {
    return (
      <section className="game-instructions col-12">
        <h3>Welcome to P1 Heroes!</h3>

        <div className="instructions-text-wrap">
          <p>
            Pit your favourite Formula 1 drivers against each-other in this incredibly original card game that
            definitely isn't a rip-off of Top Trump
          </p>
          <p>
            Win cards by choosing an attribute that beats your opponents! But choose carefully, get it wrong and you'll
            lose your own card!
          </p>
          <p>
            The winner is the player who ends up with all of the cards, the loser must hang their head in shame and
            think about what they've done.{" "}
          </p>
          <p>Don't be a pathetic loser. Be a hero.</p>
          <p>With Team Ranking the lowest number wins!</p>
        </div>

        {/* <p>
          Pit your favourite Formula 1 drivers against each-other in this incredibly original card game that definitely
          isn't a rip-off of Top Trumps <br></br>
          Win cards by choosing an attribute that beats your opponents! But choose carefully, get it wrong and you'll
          lose your own card!<br></br>
          The winner is the player who ends up with all of the cards, the loser must hang their head in shame and think
          about what they've done. <br></br>
          Don't be a pathetic loser. Be a hero.
        </p>
        <p>With Team Ranking the lowest number wins!</p> */}

        <button className="instructions-btn hide-btn" onClick={toggleInstructions}>
          Hide Instructions
        </button>
      </section>
    );
  }
  return (
    <button className="instructions-btn show-btn" onClick={toggleInstructions}>
      Show Instructions
    </button>
  );
};

export default GameInstructions;
