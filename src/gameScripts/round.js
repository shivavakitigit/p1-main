// const inquirer = require('inquirer');  //INQUIRER USED FOR DEVELOPMENT, NEED NEW SOLUTION

function round(hand1, hand2) {
  // 'i' AND 'j' ARE THE INDEXES, 'i' = USER, 'j' = COMPUTER.
  // INITIALISED HERE AND ONLY ONCE
  var i = 0;
  var j = 0;
  function play() {
    // WIN STATE
    if (i === 8) {
      return console.log("YOU WON");
    }
    // LOSE STATE
    if (j === 8) {
      return console.log("GAME OVER: YOU LOST");
    }

    // console.log('i = ' + i, 'j = ' + j) USED IN DEVELOPMENT

    // PLAYER SELECTION METHOD (INQUIRER PROMPT)-------------------WILL NEED CHANGING FOR REACT!!!!
    const round = {
      name: "round",
      message: hand1[i].name,
      type: "list",
      choices: [
        "EXP: " + hand1[i].experience,
        "TMR: " + hand1[i].teamRanking,
        "WIN: " + hand1[i].wins,
        "POD: " + hand1[i].podiums,
        "CHA: " + hand1[i].championships,
        "RAT: " + hand1[i].rating,
      ],
    };
    // MAP OF CORRESPONDING ATTRIBUTES TO COMPARE WITH USER'S CHOICE
    const roundAI = new Map([
      ["EXP", hand2[j].experience],
      ["TMR", hand2[j].teamRanking],
      ["WIN", hand2[j].wins],
      ["POD", hand2[j].podiums],
      ["CHA", hand2[j].championships],
      ["RAT", hand2[j].rating],
    ]);
    // WIN CONDITION
    // CONSOLE LOGS TO BE REPLACED WITH GUI ELEMENTS
    function wonRound() {
      console.log("You win this card: " + hand2[j].name);
      // AT POSITION i++, ADD THE CARD JUST LOST BY AI

      hand1.splice(i++, 0, hand2.splice(j, 1));
      // hand1.splice(i++, 0, hand2.splice(j--, 1));  <-- PREVIOUS LINE, REMOVED 16/02 20:28

      console.log(`You now have ${hand1.length} cards`);

      nextRound();
    }
    // LOSS CONDITION
    // CONSOLE LOGS TO BE REPLACED WITH GUI ELEMENTS
    function lostRound() {
      console.log("You lose this card: " + hand1[i].name);
      // AT POSITION j++ ADD CARD JUST LOST BY PLAYER
      hand2.splice(j++, 0, hand1.splice(i, 1));
      // hand2.splice(j++, 0, hand1.splice(i--, 1)); <-- PREVIOUS LINE, REMOVED 16/02 20:28

      console.log(`You have ${hand1.length} cards remaining`);

      nextRound();
    }

    // THIS FUNCTION CHECKS THAT THE INDEX # FOR 'i' & 'j' REMAINS LESS THAN THE HAND LENGTH, RESETTING IT TO 0
    // OTHERWISE SIMPLY ADDS 1
    function nextRound() {
      // USER (hand1) INDEX
      if (i === hand1.length) {
        return (i = 0);
      } else {
        i++;
      }
      // AI (hand2) INDEX
      if (j === hand2.length) {
        return (j = 0);
      } else {
        j++;
      }
    }
    // THIS CONDITIONAL WAS WRITTEN EARLY IN DEVELOPMENT, PROBABLY NO LONGER NECESSARY BUT DON'T WANT TO REMOVE IT YET
    if (hand1.length > 0 && hand2.length > 0) {
      // console.log('H1 length: ' + hand1.length, 'H2 length: ' + hand2.length)  USED DURING DEVELOPMENT

      // THIS IS THE ACTUAL GAME, OBVIOUSLY NEEDS TO BE CHANGED FROM INQUIRER
      // inquirer.prompt(round)
      // .then((playerChoice) => {
      //pAtt TAKES THE FIRST 3 CHARS OF THE STRING TO SEE WHICH ATTRIBUTE WAS PLAYED
      const pAtt = playerChoice.round.slice(0, 3);
      //pNum TURNS THE STRING VALUE INTO A NUMERIC VALUE
      const pNum = parseInt(playerChoice.round.slice(5));
      //aiNum MATCHES pAtt TO roundAI TO GET CORRESPONDING VALUE
      const aiNum = roundAI.get(pAtt);
      // LOGS DRIVER "Hamilton WIN: 10" - FOR EXAMPLE
      console.log(hand2[j].name + " " + pAtt + ":" + aiNum);
      //Win/Lose state
      pNum > aiNum ? wonRound() : lostRound();

      play();

      // })
    }
  }

  play();
}

export default round;
