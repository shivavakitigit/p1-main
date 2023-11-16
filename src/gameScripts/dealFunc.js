            //THIS FUNCTION TAKES 'deck' AS A PROP AND PUSHES TO 'hand1' and 'hand2' ALTERNATELY.
            // THE FUNCTION RETURNS AN ARRAY CONTAINING 2 ARRAYS, BOTH HANDS
function deal(deck) {
    const hand1 = [];
    const hand2 = [];

    for (let C of deck) {
        if (hand1.length <= hand2.length) {
            hand1.push(C)
        } else {
            hand2.push(C)
        }
    }
    return [hand1, hand2]
}

export default deal