// import getStartingState from "./getStartingState.js";
const getStartingState = require("./generateDefaultBoard.js")

const fs = require('fs');
const path = require('path');

function saveFile(content,fileName){
  console.log(`Saving content to ${fileName}.txt..`)
  fs.writeFile(path.resolve(__dirname, `./${fileName}`), content, err => {
  if (err) {
    console.error("Error writing file:",err);
    }});
}//end saveFile


//call the function
let array = getStartingState();
// console.log("SMOKE", array);
let string = '';
for (let obj of array){
  string += JSON.stringify(obj);
} //convert array of obj, into array of string to view

saveFile(string,'startingState.JSON');

