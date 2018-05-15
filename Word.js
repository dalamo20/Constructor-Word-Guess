var Letter = require("./Letter");

// Contains a constructor, Word that depends on the Letter constructor. 
var Word = function(randomWord) {
  this.currentWord = [];
}

for(var i = 0; i < randomWord.length; i++) {
    this.currentWord.push(new Letter(randomWord[i]));
}

//Look up OOP(object orientation programming)