// const round = require('./round');
import deal from './dealFunc';

////////////////////////////////////////////////////////////// INITIALISE GAME
function shuffleDeal() {
    // ALL DRIVER DATA 
    // const driverData = require('../driver-data.json')
    
    /////////////////////////////////////////////////////////////// FUNCTIONS
    // FUNCTION SHUFFLING ARRAY (deck) ORDER
    const shuffle = require('./shuffleFunc');
    
    // FUNCTION DEALING CARDS TO 2 HANDS
    // const deal = require('./dealFunc');
    
    // GAMEPLAY

    // FULL LIST OF CARDS/DRIVERS USED
    const deck = require('../driver-data.json');
    // console.log(deck[0].name)
    // 'hands' BECOMES AN ARRAY CONTAINING 2 HANDS FROM A SHUFFLED 'deck'
    const hands = deal(shuffle(deck));
    
    // const hand1 = hands[0]  //USER'S HAND
    // const hand2 = hands[1]  //AI'S HAND
    // console.log(hand2[0])
    // round(hand1, hand2)
    return hands

    // console.log(hands[0][0].name)
}
shuffleDeal()


export default shuffleDeal
