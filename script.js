/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

let correctNumber = getRandomNumber();
let guesses = [ ];

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);  
}

function playGame(){
    
    let numberGess = document.getElementById('number-guess').value;
    displayResult(numberGess);
    saveGuessHistory(numberGess);
    displayHistory() ;
    
}

function displayResult(numberGess){
  if(numberGess>correctNumber){
    showNumberAbove();
   }
   else if(numberGess<correctNumber){
    showNumberBelow();
   }else{
    showYouWon();
   }
}


function initGame(){

    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = " ";
    guesses = [];
    displayHistory() ;
  
}


function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}


function getRandomNumber(){
    
   let x = Math.random()*100;
    let whole = Math.floor(x)+1;
    return whole;

}


function saveGuessHistory(guess) {

  guesses.push(guess);
    
}


function displayHistory() {
  let index=guesses.length-1; // TODO
  let list = "<ul class='list-group'>";

  while(index>=0){
    list+="<li class='list-group-item'> "+"you gussed  "
    +guesses[index]+"</li>";
    index--;
  }
  list += '</ul>';
  document.getElementById("history").innerHTML = list;
}



function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  let dialog = getDialog('won',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  let dialog = getDialog('warning',text);
  document.getElementById("result").innerHTML = dialog;
}
