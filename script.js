// Javascript for the rock paper scissors game 
// var playerVal;
var gameVal;
let gameScore = 0;
let playerScore = 0;
let tie = 0;
let gameChoice = 0;
let playerChoice = 0;
//for (let i =0; i<100; i++){
   // game(Math.floor(Math.random()*3));
//}
function beginGame(n){
    if (n==3){ 
        resetGame();
    }
    else{
        game(n);
    }
}
function game(playerVal){
    var winner;
        gameVal = gameSelection();
        winner = compare(playerVal,gameVal);
        saveWinner(winner);
}

function gameSelection(){
    return Math.floor(Math.random()*3);
}

function compare(p,c){
    if (p==c){
        return 2;
    }
 switch (p){
     case 0:
         if (c==1){
             return 1;
         }
         else{
             return 0;
         }

     case 1:
        if (c==2){
            return 1;
        }
        else{
            return 0;
        }
     case 2:
        if (c==0){
            return 1;
        }
        else{
            return 0;
        }
 }
}
//Doesn't print out the fifth number before the alert message 
function saveWinner(n){
    if (n ==0 ){
        playerScore++;
        document.getElementById("player").innerHTML=("Player score: " + playerScore);
        
    }
    else if (n ==1){
        gameScore++;
        document.getElementById("game").innerHTML=("Game score: " + gameScore);
    }
    else if (n==2){
        tie++;
        document.getElementById("ties").innerHTML=("Ties: " + tie);
       // console.log("tie");
    }
    if (playerScore >= 5){ 
       alertM("won");
    } else  if (gameScore>=5){
       alertM("lost");
    }
    
}
function alertM(message){
 alert("You " + message);
 resetGame();
}
function resetGame(){
     playerScore = 0;
     gameScore = 0;
     tie = 0;
     document.getElementById("player").innerHTML=("Player score: " + playerScore);
     document.getElementById("game").innerHTML=("Game score: " + gameScore);
     document.getElementById("ties").innerHTML=("Ties: " + tie);
}

//function checkWin(){
   // 
  //  else if (gameScore>=5){
  //  }
//}