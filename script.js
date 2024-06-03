var time = 60;
var score = 0;
var hitRN;
function incScore() {
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

function bubbleMaker() {
    var clutter = "";
    for (var i = 1; i <= 102; i++) {
      var randomNum = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${randomNum}</div>`;
    }
    document.querySelector(".p-bottom").innerHTML = clutter;
}

function runTimer() { 
    var timer = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#timerVal").innerHTML = time;
        }
        else {
            clearInterval(timer);
            document.querySelector('.p-bottom').innerHTML = `<h1 id="gameOver">GAME OVER ! <br> YOUR SCORE WAS : ${score} <br><br> RE-FRESH TO RESTART</h1 >`;
        }
    }, 1000);
}

function getNewHit() {
    hitRN = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRN;
}

document.querySelector('.p-bottom').addEventListener('click', (dets) => {
    var clickedNum = (Number(dets.target.textContent));
    if (clickedNum == hitRN) {
        incScore();
        bubbleMaker();
        getNewHit();
    }
});
runTimer(); 
bubbleMaker();
getNewHit();
