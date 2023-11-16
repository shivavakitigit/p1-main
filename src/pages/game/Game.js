import { useState } from "react";
import { motion } from "framer-motion";

import WinGame from "../../components/WinGame";
import LoseGame from "../../components/LoseGame";

import TrumpCard from "../../components/TrumpCard";
import "./game.css";
import GameInstructions from "../../components/GameInstructions";

// GAME LOGIC
import shuffleDeal from "../../gameScripts/gameLogic";

const hands = shuffleDeal();

const Game = () => {
  const iconVariants = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(226, 61, 49, 1)",
      transition: {
        default: { duration: 5, ease: "easeInOut" },
        fill: { duration: 5, ease: [1, 0, 0.8, 1] },
      },
    },
  };

  // Dealt hands
  let hand1 = hands[0];
  let hand2 = hands[1];

  // States Getting User's chosen Att Name and Value
  const [userAttVal, setUserAttVal] = useState(undefined);
  const [userAttName, setUserAttName] = useState(undefined);
  const [roundResult, setRoundResult] = useState(undefined);

  //
  const getUserAttVal = (userAttVal) => {
    setUserAttVal(userAttVal);
  };
  const getUserAttName = (userAttName) => {
    setUserAttName(userAttName);
  };

  // State Getting AI's Att Value for comparison
  const [AIAttVal, setAIAttVal] = useState(undefined);
  const getAIVal = (AIAttVal) => {
    setAIAttVal(AIAttVal);
  };

  const valueReset = () => {
    setUserAttName(undefined);
    setUserAttVal(undefined);
    setAIAttVal(undefined);
  };

  // Value Comparison

  function winCard() {
    let wonCard = [];
    wonCard = hand2.splice(j, 1);
    hand1.splice(hand1.lastIndexOf, 0, wonCard[0]);
    seti((i += 2));
    valueReset();
  }

  function loseCard() {
    let lostCard = [];
    lostCard = hand1.splice(i, 1);
    hand2.splice(hand2.lastIndexOf, 0, lostCard[0]);
    setj((j += 2));
    valueReset();
  }

  let [i, seti] = useState(0);
  let [j, setj] = useState(0);

  const increment = () => {
    i === hand1.length ? seti(0) : seti(i++);
    j === hand2.length ? setj(0) : setj(j++);
  };
  // Logic to Flip AI Card
  const [AIFlip, setAIFlip] = useState(true);
  const flipAICard = () => setAIFlip(!AIFlip);

  //  Incrementation, Win/Lose States and AI Card Flipping
  const nextRound = () => {
    flipAICard();
    setTimeout(() => {
      // If round is a Draw
      if (userAttVal === AIAttVal && userAttName !== undefined) {
        increment();
        increment();
        flipAICard();
        valueReset();
        setRoundResult("draw");
      } else if (userAttName === "Team Ranking") {
        /////////////////// If Att is Team Ranking, Invert Win/Lose Condition
        if (userAttVal < AIAttVal) {
          winCard();
          increment();
          setRoundResult("win");
        } else if (userAttVal > AIAttVal) {
          loseCard();
          increment();
          setRoundResult("lose");
        }
      } else {
        // Normal game conditions
        if (userAttVal > AIAttVal) {
          winCard();
          setRoundResult("win");

          increment();
        } else if (userAttVal < AIAttVal) {
          loseCard();
          setRoundResult("lose");

          increment();
        }
      }
    }, 500);
  };

  //  Boolean controlling display of game instructions
  const [showInstructions, setShowInstructions] = useState(true);
  //  Function used to toggle showInstructions true/false
  const toggleInstructions = () => setShowInstructions(!showInstructions);

  //  Win Game State
  if (hand1.length === 20) {
    return <WinGame />;
  }
  //  Lose Game State
  if (hand2.length === 20) {
    return <LoseGame />;
  }
  //  Play Game State
  else {
    return (
      <section className="game">
        <div className="logo-container">
          <motion.svg className="logo game-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 637.66 285.07">
            <motion.path
              className="item"
              d="m5.36,282.34L195.25,56.9,142.9,2.5c93.62,0,89.77-.03,187.81.37L95.14,282.56l-89.77-.23ZM301.69,60.56L350.55,3.36c148.68-1.33,6.44-.34,155.16-.34,71.47,0,129.45,39.75,129.45,88.77s-57.98,88.77-129.45,88.77c-163.78,0-36.36.11-200.74.11-20.6,24.34-64.42,76.81-85.69,100.89h-103.08c36.4-43.36,96.34-114.64,132.78-158,182.72,0,73.29.11,257.22.11,25.8,0,46.72-14.35,46.72-32.06s-20.93-32.06-46.72-32.06c-129.93,0-204.85,1-204.85,1h.34Z"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            />
          </motion.svg>{" "}
        </div>

        <div className="instructions-wrap row">
          <GameInstructions toggleInstructions={toggleInstructions} showInstructions={showInstructions} />
        </div>

        <div className="game-wrap row">
          <div className="col-12 col-md-6">
            <div className="player-wrap">
              <h3>Player 1</h3>
              <p>{hand1.length} cards remaining</p>
            </div>
            <TrumpCard
              player="user"
              card={hand1[i]}
              getUserAttVal={getUserAttVal}
              getUserAttName={getUserAttName}
              nextRound={nextRound}
              flipAICard={flipAICard}
            />
            {roundResult && (
              <div className="round-result">
                {roundResult === "win" && <p style={{ backgroundColor: "green" }}>You won the card!</p>}
                {roundResult === "lose" && <p style={{ backgroundColor: "red" }}>You lost the card!</p>}
                {roundResult === "draw" && <p style={{ backgroundColor: "grey" }}>Draw!</p>}
              </div>
            )}
          </div>
          <div className="col-12 col-md-6">
            <div className="player-wrap">
              <h3>Computer</h3>
              <p>{hand2.length} cards remaining</p>
            </div>
            <TrumpCard
              player="computer"
              card={hand2[j]}
              userAttName={userAttName}
              getAIAttVal={getAIVal}
              AIFlip={AIFlip}
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Game;
