/** Rock, Paper or Scissors Game
 * Arrow function syntax for introducing a function tha reflects the user's choice.
 * @param userInput can take any of the valid choices: ‘rock’, ‘paper’, or ‘scissors’.
 * We use toLowerCase() function to make @param userInput all lowercase.
 * We include an if/else statement to make sure that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
*/
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Error! Invalid choice.")
    }
  }
  
  /**
   * We create a function to get a whole number between 0 and 2.
   * Then, depending on the number, return either 'rock', 'paper' or 'scissors'.
  */
  function getComputerChoice () {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;    
    }
  }
  
  /**
   * We create a function to determine a winner.
   * This function will compare the two choices played and then return if the human player won, lost, or tied.
  */
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "The game is a tie!";
    } else if (userChoice === "rock" && computerChoice === "paper") {
      return "The computer won!";
    } else if (userChoice === "rock" && computerChoice === "scissors") {
      return " You won!";
    } else if (userChoice === "paper" && computerChoice === "rock") {
      return "You won!";
    } else if (userChoice === "paper" && computerChoice === "scissors") {
      return "The computer won!";
    } else if (userChoice === "scissors" && computerChoice === "rock") {
      return "The computer won!";
    } else (userChoice === "scissors" && computerChoice === "paper");
      return "You won!";
   }
  
  /**
   * We create a function to start the game.
   * This function will return the choices played.
  */
  function playGame () {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer choice: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  // Function used to start the game
  playGame();
  