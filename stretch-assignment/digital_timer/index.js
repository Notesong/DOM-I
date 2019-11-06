// set up timer number variables
let msTens = 0;
let msHuns = 0;
let sOnes = 0;
let sTens = 0;
// variable for setting interval for timer
let timerInterval;

let button = document.querySelector("button");
button.addEventListener('click', (event) => {
    timerInterval = setInterval(timer, 10);
});

function timer() {
    // set timer to zero
    document.getElementById("msTens").innerHTML = msTens;
    document.getElementById("msHundreds").innerHTML = msHuns;
    document.getElementById("secondOnes").innerHTML = sOnes;
    document.getElementById("secondTens").innerHTML = sTens;
    // start timer
    msTensTimer();
}

function msTensTimer() {
    // check if digit is nine.  If so, reset and run the next function
    if (msTens === 9) {
        msHunsTimer();
        msTens = -1;
    }
    // increment the digit
    document.getElementById("msTens").innerHTML = ++msTens;
}

function msHunsTimer() {
    // check if digit is nine.  If so, reset and run the next function
    if (msHuns === 9) {
        secOnesTimer();
        msHuns = -1;
    }
    // increment the digit
    document.getElementById("msHundreds").innerHTML = ++msHuns;
}

function secOnesTimer() {
    // check if digit is nine.  If so, reset and run the next function
    if (sOnes === 9) {
        secTensTimer();
        sOnes = -1;
    }
    // increment the digit
    document.getElementById("secondOnes").innerHTML = ++sOnes;
}

function secTensTimer() {
    // only run when timer hits 10 seconds
    document.getElementById("secondTens").innerHTML = ++sTens;
    // stop timer
    clearInterval(timerInterval);
    // make all numbers red
    const digits = document.querySelectorAll(".digit");
    digits.forEach(element => {
        element.classList.add("redDigit");
    });
}