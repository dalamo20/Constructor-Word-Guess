var Letter = function (character) {
    this.guessed = false;
    //character coming from user input(process.argv or inquirer)
    this.character = character;
}
//red
//first function outputs letter display
Letter.prototype.outputLetterDisplay = function () {
    if (this.guessed === true) {
        return this.character;
        //else display underscore
    } else {
        //PLEASE DOUBLE CHECK THIS
        return this.character = "_";
    }
}

    //blue
    //second function checks the guess
    Letter.prototype.checkGuess = function(userinput) {
        if (userinput === this.character) {
            this.guessed = true;
        }
    }
   

    //export Letter constructor
    module.exports = Letter;