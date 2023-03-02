
//get the buttons
const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const playAgain = document.getElementById("btn-again");

//get the text for player's choice
const pChoiceRock = document.getElementById("pChoice-rock");
const pChoicePaper = document.getElementById("pChoice-paper");
const pChoiceScissors = document.getElementById("pChoice-scissors");

//get the text for cpu's choice
const cChoice = document.getElementById("cChoice");
const cChoiceRock = document.getElementById("cChoice-rock");
const cChoicePaper = document.getElementById("cChoice-paper");
const cChoiceScissors = document.getElementById("cChoice-scissors");

//get the text for game results
const pVictory = document.getElementById("pVictory");
const cVictory = document.getElementById("cVictory");
const tieResult = document.getElementById("tie");

const choiceButton = Array.from(document.getElementsByClassName("choice-btn"));
const btnsToReset = Array.from(document.getElementsByClassName("reset-btn"));
const logToReset = Array.from(document.getElementsByClassName("reset-log"));
const victoryToReset = Array.from(document.getElementsByClassName("reset-victory"));

//meant to communicate to user that the buttons are inactive
const buttonFade = (pressedButton) => {
	choiceButton.forEach(element => {
		if (element !== pressedButton) {
			element.style.textDecoration = "line-through";
			element.disabled = true;
		}
	pressedButton.disabled = true;		
	});
}

//determines cpu choice
const getComputerChoice = () => {
	cChoice.style.display = "block";
	switch (Math.floor(Math.random()*3)) //Math.random() generates a random number between 0 and 1.  We take the result and multiply that by 3, and then use Math.floor() to round the result down to the nearest integer.
	{
		case 0:
			cChoiceRock.style.display = "block";
			return "rock";
			break;
		case 1:
			cChoicePaper.style.display = "block";
			return "paper";
			break;
		case 2:
			cChoiceScissors.style.display = "block";
			return "scissors";
			break;
	}
}

//determines game results based on player choice and cpuchoice
//set the relevant element display to "block" to re-add to the document flow.
const determineWinner = (userChoice, computerChoice) => 
{
	if (userChoice === computerChoice) 
	{
		tieResult.style.display = "block";
		return "tie";
	} else if (userChoice === "rock")
	{
		if (computerChoice === "paper")
		{
			cVictory.style.display = "block";
			return "pcwin";
	 	} else
		{
			pVictory.style.display = "block";
			return "userwin";
		}
  } else if (userChoice === "paper")
  {
		if (computerChoice === "scissors")
		{
			cVictory.style.display = "block";
			return "pcwin";
		} else
		{
			pVictory.style.display = "block";
			return "userwin";
		}
	} else if (userChoice === "scissors")
	{
		if (computerChoice === "rock")
		{
			cVictory.style.display = "block";
			return "pcwin";
		} else
		{
			pVictory.style.display = "block";
			return "userwin";
		}
	}
}

//what happens when you click the rock button
btnRock.addEventListener("click", function(){
	buttonFade(btnRock); //disable buttons and cross out the other two
	determineWinner("rock", getComputerChoice()); //run determineWinner() with rock as player's choice and getComputerChoice() to get CPU choice
	pChoiceRock.style.display = "block"; //add text for player's choice to document flow	
	playAgain.style.display = "block"; //add playAgain button to document flow
});

btnPaper.addEventListener("click", function(){
	buttonFade(btnPaper);
	determineWinner("paper", getComputerChoice());
	pChoicePaper.style.display = "block";	
	playAgain.style.display = "block";
});

btnScissors.addEventListener("click", function(){
	buttonFade(btnScissors);
	determineWinner("scissors", getComputerChoice());
	pChoiceScissors.style.display = "block";	
	playAgain.style.display = "block";
});

//what happens when you press play again
playAgain.addEventListener("click", function(){
	btnsToReset.forEach(element => { //play buttons re-enabled
		element.disabled = false;
		element.style.textDecoration = "none";
	}); //remove text and stuff from the document flow again
	logToReset.forEach(element => {
		element.style.display = "none";
	})
	victoryToReset.forEach(element => {
		element.style.display = "none";
	})
})