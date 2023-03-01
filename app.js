const btnRock = document.getElementById("btn-rock");
const btnPaper = document.getElementById("btn-paper");
const btnScissors = document.getElementById("btn-scissors");
const playAgain = document.getElementById("btn-again");

const pChoiceRock = document.getElementById("pChoice-rock");
const pChoicePaper = document.getElementById("pChoice-paper");
const pChoiceScissors = document.getElementById("pChoice-scissors");

const cChoice = document.getElementById("cChoice");
const cChoiceRock = document.getElementById("cChoice-rock");
const cChoicePaper = document.getElementById("cChoice-paper");
const cChoiceScissors = document.getElementById("cChoice-scissors");

const pVictory = document.getElementById("pVictory");
const cVictory = document.getElementById("cVictory");
const tieResult = document.getElementById("tie");

const choiceButton = Array.from(document.getElementsByClassName("choice-btn"));
const btnsToReset = Array.from(document.getElementsByClassName("reset-btn"));
const logToReset = Array.from(document.getElementsByClassName("reset-log"));
const victoryToReset = Array.from(document.getElementsByClassName("reset-victory"));

const buttonFade = (pressedButton) => {
	choiceButton.forEach(element => {
		if (element !== pressedButton) {
			element.style.textDecoration = "line-through";
			element.disabled = true;
		}
	pressedButton.disabled = true;		
	});
}

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

btnRock.addEventListener("click", function(){
	buttonFade(btnRock);
	determineWinner("rock", getComputerChoice());
	pChoiceRock.style.display = "block";	
	playAgain.style.display = "block";
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

playAgain.addEventListener("click", function(){
	btnsToReset.forEach(element => {
		element.disabled = false;
		element.style.textDecoration = "none";
	});
	logToReset.forEach(element => {
		element.style.display = "none";
	})
	victoryToReset.forEach(element => {
		element.style.display = "none";
	})
})