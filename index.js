//prompt, process.argv, inquirer
var Word = require("./Word");
var inquirer = require("inquirer");

//randomly select a word and use Word constructor to store it
var wordArray = ["pusheen", "donut", "buttons", "bella"];
var randomIndex = Math.floor(Math.random() * wordArray.length);
var randomWord = wordArray[randomIndex];
// console.log(randomWord);
    // store in word constructor 
    var petName = new Word(randomWord);
    console.log(petName);

 //Prompts user for each guess and keeps track of user's remaining guess
 //I wanted to use the prompt 

 function start() {
     inquirer.prompt([{
         //start game displaying empty word
     }]);
 }
 //track user input
 //guesses remaining
 //win/lose conditions 