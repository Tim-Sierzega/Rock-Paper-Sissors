function computerPlay(options) {

    return options[Math.floor(Math.random() * options.length)];
  
  }
  var options = ['rock', 'paper', 'scissors'];
  
  
  function playGame() {
    let playerScore = 0;
    let compScore = 0;
  
    function playRound() {
      const playerPick = prompt();
      let playerSelection = playerPick.toLowerCase();
      let computerSelection = computerPlay(options);
      if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You Win! Rock beats Scissors ' + ++playerScore + " point for player");
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You Win! Paper beats Rock ' + ++playerScore + " point for player")
      } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You Win! Scissors beats Paper ' + ++playerScore + " point for player")
      } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('Computer Win! Scissors beats Paper ' + ++compScore + " point for computer")
      } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('Computer Win! Rock beats Scissors ' + ++compScore + " point for computer")
      } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('Computer Win! Paper beats Rock ' + ++compScore + "point for computer")
      } else if (playerSelection === computerSelection) {
        console.log('draw')
      }
    }
    while (playerScore < '5' && compScore < '5') {
      playRound();
      console.log('You won' + playerScore + ' points');
          if (playerScore === 5){
          console.log('Congratulations, you won the round!')
          }
          if (compScore === 5){
          console.log('Sorry you lose.')
          }
  }
  }