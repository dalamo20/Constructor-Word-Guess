// Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), 
var Letter = function (character) {
    this.guessed = false;
    //character coming from user input(process.argv or inquirer)
    this.character = character;
}
//first function outputs the display
//Letter.prototype.(nameOfFunction) = function(){
//if(this.guessed === true) 
//return this.character
//else display underscore}

//second function checks the guess
//Prototype function
//argument takes character(userinput)
//if (userinput === this.character)
//then this.guess === true

//export Letter constructor
module.exports = Letter;