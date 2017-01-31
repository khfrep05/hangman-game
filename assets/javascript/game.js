// here we declare the choices inside an array

	var choices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// if user has pressed the correct key, I generate the random number		
	 var randomNumber = Math.floor(Math.random() * choices.length);

 /**
    * then I assign the computer's choice with the random number
    * if randomChoice is 2, then computersChoice would be choices[2] (same as "c")
    */

    var computersChoice = choices[randomNumber];

  //This is how many lives the user is allowed to have  

    var lives = 9;
    console.log(lives)


window.onekeyup = function(event) {

// here we get the [key] property of the "event" argument and lowercase it

	var usersChoice = event.key.toLowerCase();

// this is the first conditional check I do to see if user has clicked 

		if(choices.indexOf(usersChoice) > -1) {


// if the user and computer is the same, then we declare a win.

        if(usersChoice === computersChoice) {

         	document.body.innerHTML = "<h1>YOU WIN!</h1>";



};