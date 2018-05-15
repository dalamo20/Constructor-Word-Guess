var Letter = require("./Letter");

// Contains a constructor, Word that depends on the Letter constructor. 
var Word = function(randomWord) {
  this.currentWord = [];

  for(var i = 0; i < randomWord.length; i++) {
      this.currentWord.push(new Letter(randomWord[i]));
  }
}
//red
Word.prototype.outputWordDisplay = function (){
    //output word adds more strings
   var outputWord = "";
    this.currentWord.forEach(function(letter){
        outputWord += letter.outputLetterDisplay();

    });
}
//blue
Word.prototype.checkGuess = function (userinput) {
this.currentWord.forEach(function(letter){
    letter.checkGuess(userinput);
});
}

module.exports = Word;

//Look up OOP(object orientation programming)