


// This file is used to create the default board as an array to be ready to access.
// because of this during development, it can be switched from Reacts ES6
// saveFile module (remove export default)
export default function getStartingState(){
    const letters = 'abcdefgh'
    const numbers = '12345678'
    
    let state = [];
    let counter = 0;
    let isBlack=false ;
    let letter;
    let number;
    for (let i=0; i < 8; i++){     // from 1 to 8 => bottom to top
        number = numbers[i]
        for (let j=0; j < 8; j++){ // from a to h => left to right
            letter = letters[j]
            state.push({
                id: counter,
                coordinate: `${letter}${number}`, //chessboard coordinate
                x: j, //x coordinate
                y: i, //y coordinate
                piece: null,
                underAttackFromWhite: false,
                underAttackFromBlack: false,
                isBlack: isBlack
            })
            counter ++;
            isBlack = !isBlack
        } //end inner 
    isBlack = !isBlack //on next row, start with opposite color
    }//end outer
    // console.log("state",state);
    return state
}//end getStartingState

// module.exports = getStartingState; // saveFile module