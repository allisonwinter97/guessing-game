let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//check users input
function alert(currentHumanGuess){
    if (currentHumanGuess >= 0 && currentHumanGuess <= 9){
      return true;
    } else {
      return false;
    }
  }

//Function to create a random number that is the TARGET
function generateTarget(){
    const targetNumber = Math.floor((Math.random()) * 10);
    return targetNumber; 
}

//function to determien the absolute distance
function getAbsoluteDistance(guess, target){
    const differenceInDistance = Math.abs(target - guess);
    return differenceInDistance; 
}


//function called to determine which guess is closest to the target number
function compareGuesses(humanScore, computerScore, targetNumber){

    //determine difference between target and guesses
    const humanDifference = getAbsoluteDistance(humanScore, targetNumber);
    const computerDifference = getAbsoluteDistance(computerScore, targetNumber);

    //determine winner
    if(humanDifference <= computerDifference){
        return true;
    } else {
        return false;
    }
}

function updateScore(winner){
    switch (winner){
        case 'human':
            humanScore ++;
            break
            ;
        case 'computer':
            computerScore ++;
            break
            ;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
