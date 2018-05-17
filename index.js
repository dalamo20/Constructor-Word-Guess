//prompt, process.argv, inquirer
var Word = require("./Word");

//randomly select a word and use Word constructor to store it
var wordArray = ["pusheen", "donut", "buttons", "bella"];
var randomIndex = Math.floor(Math.random() * wordArray.length);
var randomWord = wordArray[randomIndex];
console.log(randomWord);
    // store in word constructor 
    var petName = new Word(randomWord);
    console.log(petName);

 //Prompts user for each guess and keeps track of user's remaining guess