'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1)
document.querySelector(".number").textContent = "?"
document.querySelector(".number").ariaHidden = secretNumber


let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector(".message").textContent = message
}

//the reaslts of the checking button
const asking = document.querySelector(".check").addEventListener("click", function() {

    const guess = Number(document.querySelector(".guess").value)
   
    if (!guess) {
         // if the player don't put a number

       displayMessage("YOU NEED TO PUT A NUMBER!") 


    } else if (guess === secretNumber) {
        //if the players WINS
        
        
        document.querySelector(".number").textContent = secretNumber
       displayMessage("GOOD JOB") 
        document.querySelector("body").style.backgroundColor="green"
        document.querySelector(".number").style.width = "30rem"
        score++;
        document.querySelector(".score").textContent = score;
        document.querySelector(".highscore").textContent = score

        if(score > highscore){

              highscore = score

              document.querySelector(".highscore").textContent = highscore;

             
        }
        

    }else if(guess !== secretNumber){
        displayMessage(guess > secretNumber ? "TOO HIGH":"TOO LOW") 
        score --
        document.querySelector(".score").textContent = score;
        

    }else if(guess > 20 && guess < 0){
        document.querySelector("body").style.backgroundColor = "red"
       displayMessage("BETTER LUCK NEXT TIME 👎!!")
    } 
        
        

    
       

});




// the again button
const again = document.querySelector(".again").addEventListener("click",function(){
    
    document.querySelector(".score").textContent = score = 20
    document.querySelector("body").style.backgroundColor="#222"
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    document.querySelector(".number").style.width = "15rem"
    displayMessage("Start guessing...")
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    document.querySelector(".highescore").value = highscore

    
})




