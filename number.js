var divAdd = document.querySelector(".add");
var divTurnStats = document.querySelector(".turnStats");
var divHistory = document.querySelector("#history");
var turnsLeft = document.getElementById("turnsLeft");
var inputGP = document.getElementById("gamesPlayed");
var inputGW = document.getElementById("gamesWon");
var inputTS = document.getElementById("score");
var btnSubmit = document.querySelector("#submit");
var btnPlayAgain = document.querySelector("#playAgain");
var numGuess = document.querySelector("#numberGuess");
var random = Math.floor((Math.random() * 10) + 1);
console.log("Random number: ", random);
var gamesPlayed = 1;
var gamesWon = 1;
var clickCount = 0;
const clickLimit = 10;
turnsLeft.value = clickLimit;
score.value = 0;

btnSubmit.addEventListener("click", function() {
    let i = clickCount + 1;
    let clicksLeft = (clickLimit - 1) - clickCount;
    inputGP.value = gamesPlayed;
    createChildElement("p", "Guess No:" + i + " is: " + numGuess.value, divHistory);   
    countClicks();

    if (compare(numGuess.value, random)) {
        createChildElement("h2", "Congratulations!!! YOU WON!!!  Correct Number IS: " + 
        numGuess.value, divAdd);
        document.getElementById("playAgain").style.visibility = "visible";
        inputGW.value = gamesWon;
        gamesWon++;
        btnSubmit.disabled = true;
        turnsLeft.value = clickLimit;
        clickCount = 0;
        score.value = parseInt(score.value)  + totalScore(clicksLeft, clickLimit);
    }
    else {
        let message = "Wrong answer... try again.";
        if (i == clickLimit) {
            message = "Wrong answer for the " + i + "th time.... GAME OVER!";
        }
        createChildElement("p", message, divHistory);
    }

    turnsLeft.value = clicksLeft;
});

btnPlayAgain.addEventListener("click", function() {
    btnPlayAgain.style.visibility = "hidden";
    let p = document.querySelectorAll("p, h2");
    for (let j = 0; j < p.length; j++) {
        p[j].remove();        
    }
    turnsLeft.value = clickLimit;
    numGuess.value = "";
    btnSubmit.disabled = false;
    gamesPlayed++;
    random = Math.floor((Math.random() * 10) + 1);
    console.log("Random Number: ", random);
});

function countClicks() {   
    
    if (clickCount >= clickLimit) {
        alert("GAME OVER");
        if (confirm("Do you want to play again?")) {
            window.location.reload();
            gamesPlayed++;
            clickCount = 0;
        }
        else {
            alert("Please close the page... Good-Bye!")
            let quit = document.querySelectorAll("div, u, input, label, button");
            for (let index = 0; index < quit.length; index++) {
                quit[index].remove();                
            }
            let body = document.querySelector("body");
            setTimeout(
                () => {
                    createChildElement("h1", "If you're done... PLEASE Close The Page." + 
                    numGuess.value, body)
                },
                3 * 1000
            );
        }
        return false;
    }
    else {
        clickCount++;
        return true;
    }
}

function totalScore(x, y) {
    if (clickCount < 1) {
        x = x + 1;
    }
    return x * y;
}

function compare(g, r) {
    if (g == r) {
        return true;
    }
    else {
        return false;
    }
}

function createChildElement(element, nodeText, addTo) {
    
    var parent = document.createElement(element);
    var child = document.createTextNode(nodeText);
    parent.appendChild(child);
    addTo.appendChild(parent);
}