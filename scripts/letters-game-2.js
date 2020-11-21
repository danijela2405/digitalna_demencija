$( document).ready(function() {

var lastLetter = '';
var grandmaLetter = ''
var gameRounds = 0;
var score = 1;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomLetter() {

   var result = '';
   var characters = 'ABCD';
   var charactersLength = characters.length;
   return characters.charAt(Math.floor(Math.random() * charactersLength));
}

async function gameRound(){
    document.getElementById("letter").style.color = "white";
    var letter = getRandomLetter();

    document.getElementById("letter").innerHTML = letter;

    grandmaLetter = lastLetter;
    lastLetter = letter;

    await sleep(300);
    document.getElementById("letter").style.color = "black";
}

$(".game-link").on("click", function () {
    var answer = parseInt($(this).attr("data-id"));
    var letter = document.getElementById("letter").innerHTML;

    if(letter == grandmaLetter && answer == 1){
        score+=1;
    }else if (letter != grandmaLetter && answer == 0){
        score+=1;
    }

    gameRounds +=1;

    if(gameRounds <= 9){
        gameRound();
    }else{
        document.getElementById("answer").style.visibility = "hidden";
        alert ("Rezultat "+score);
    }
});


gameRound();

});