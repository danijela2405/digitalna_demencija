$( document).ready(function() {

var lastLetter = '';
var gameRounds = 0;
var score = 1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomLetter() {

   var result = '';
   var characters = 'AX';
   var charactersLength = characters.length;
   return characters.charAt(Math.floor(Math.random() * charactersLength));
}

function getLetterColor(){

    var letterColorNumber = Math.floor(Math.random() * 2) + 1;
    var letterColor = 'white';

    if(letterColorNumber == 2){
        letterColor = 'red';
    }

    return letterColor;
}


async function gameRound(){
    var letter = getRandomLetter();
    var color = getLetterColor();

    document.getElementById("letter").innerHTML = letter;
    document.getElementById("letter").style.color = color;

    if(color == "red"){
        lastLetter = letter;
    }

    await sleep(300);
    document.getElementById("letter").style.color = "black";

}

$(".game-link").on("click", function () {
    var answer = parseInt($(this).attr("data-id"));
    var letter = document.getElementById("letter").innerHTML;
    var color = document.getElementById("letter").style.color;

    if(letter == 'X' && lastLetter == 'A' && answer == 1 && color == "red"){
        score+=1;
    }else if (answer == 0 && lastLetter != 'A'){
        score+=1;
    }

    gameRounds +=1;

    if(gameRounds <= 29){
        gameRound();
    }else{
        document.getElementById("answer").style.visibility = "hidden";
        alert ("Rezultat "+score);
    }
});


gameRound();

});