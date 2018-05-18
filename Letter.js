var Letter = function (character) {
    this.guessed = false;
    //character coming from user input(process.argv or inquirer)
    this.character = character;
}
//red
//first function outputs letter display
Letter.prototype.toString = function () {
    if (this.guessed === true) {
        return this.character;
        //else display underscore
    } else {
        //PLEASE DOUBLE CHECK THIS
        return "_";
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