$( document ).ready(function() {

var score = 0;
var gameRounds = 0;
var firstImageLetter = 'a';
var secondImageLetter = 'a';
var currentImageLetter = 'a';

function getImageLetter(){

    var imgLetterNumber = Math.floor(Math.random() * 2) + 1;
    var imgLetter = 'a';

    if(imgLetterNumber == 2){
        imgLetter = 'b';
    }

    return imgLetter;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function gameRound() {

    document.getElementById("answer").style.visibility = "hidden";
    var imgNumber = Math.floor(Math.random() * 5) + 1;

    firstImageLetter = getImageLetter();
    await sleep(200);
    document.getElementById("rectangle-image").style.backgroundImage = "url('../resources/rectangle-game/"+imgNumber+firstImageLetter+".png')";

    await sleep(100);
    document.getElementById("rectangle-image").style.backgroundImage = "url('../resources/rectangle-game/base.png')";

    secondImageLetter = getImageLetter();
    await sleep(900);
    document.getElementById("rectangle-image").style.backgroundImage = "url('../resources/rectangle-game/"+imgNumber+secondImageLetter+".png')";

    await sleep(2000);
    document.getElementById("rectangle-image").style.backgroundImage = "url('../resources/rectangle-game/base.png')";

    document.getElementById("answer").style.visibility = "visible";
}


$(".game-link").on("click", function () {
    var answer = parseInt($(this).attr("data-id"));

    if(firstImageLetter == secondImageLetter && answer == 0){
            score += 1;
    }

    if(firstImageLetter != secondImageLetter && answer == 1){
            score += 1;
    }

    gameRounds +=1;

    if(gameRounds <= 4){
        gameRound();
    }else{
        document.getElementById("answer").style.visibility = "hidden";
        alert ("Rezultat "+score);
    }
})

gameRound();

});

