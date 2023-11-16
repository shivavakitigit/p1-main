//THIS FUNCTION TAKES 'deck' AS A PROP AND RANDOMISES THE ORDER
function shuffle(deck) {
  let index = deck.length,
    randomIndex;
  while (index !== 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
  return deck;
}

module.exports = shuffle;
