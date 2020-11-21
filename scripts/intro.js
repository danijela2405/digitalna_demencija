$(document).ready(function() {

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown(){

     for (let i = 5; i >= 0; i--) {
         await sleep(1000);
         document.getElementById("countdown").innerHTML = i;
     }

     document.getElementById("countdown").innerHTML = "start";

     await sleep(1000);
     document.getElementById("game").click();
}

countdown();

});