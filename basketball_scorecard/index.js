let plusOne = document.getElementById("plus-one")
let plusTwo = document.getElementById("plus-two")
let plusThree = document.getElementById("plus-three")
let numberHome = document.getElementById("number-home")
let numberGuest = document.getElementById("number-guest")
let resetButton = document.getElementById("reset-button")
let display = document.getElementById ("timer")
let periodStatus = document.getElementById ("period")
let defaultScore = "00"
let scoreHome = 0
let scoreGuest = 0

function scoreOneHome() {
    scoreHome += 1

    if (scoreHome <= 9) {
        numberHome.textContent = "0" + scoreHome
    } else
        numberHome.textContent = scoreHome
    
    scoreHighlight ()

    console.log("Home team scored 1 point. Total score is:", scoreHome)
}

function scoreTwoHome() {
    scoreHome += 2
    
    if (scoreHome <= 9) {
        numberHome.textContent = "0" + scoreHome
    } else
        numberHome.textContent = scoreHome

    scoreHighlight ()

    console.log("Home team scored 2 points. Total score is:", scoreHome)
}

function scoreThreeHome() {
    scoreHome += 3

    if (scoreHome <= 9) {
        numberHome.textContent = "0" + scoreHome
    } else
        numberHome.textContent = scoreHome

    scoreHighlight ()

    console.log("Home team scored 3 points. Total score is:", scoreHome)
}

function scoreOneGuest() {
    scoreGuest += 1

    if (scoreGuest <= 9) {
        numberGuest.textContent = "0" + scoreGuest
    } else
        numberGuest.textContent = scoreGuest

    scoreHighlight ()

    console.log("Guest team scored 1 point. Total score is:", scoreGuest)
}

function scoreTwoGuest() {
    scoreGuest += 2

    if (scoreGuest <= 9) {
        numberGuest.textContent = "0" + scoreGuest
    } else
        numberGuest.textContent = scoreGuest

    scoreHighlight ()

    console.log("Guest team scored 2 points. Total score is:", scoreGuest)
}

function scoreThreeGuest() {
    scoreGuest += 3

    if (scoreGuest <= 9) {
        numberGuest.textContent = "0" + scoreGuest
    } else 
        numberGuest.textContent = scoreGuest

    scoreHighlight ()

    console.log("Guest team scored 3 points. Total score is:", scoreGuest)
}

function resetScore() {
    scoreHome = "0" + 0
    scoreGuest = "0" + 0
    numberHome.textContent = scoreHome
    numberGuest.textContent = scoreGuest
    
    scoreHighlight ()

    scoreHome = 0
    scoreGuest = 0

    console.log("The score was reset for both teams.", scoreHome, scoreGuest)
}






function scoreHighlight () {
    if (scoreHome > scoreGuest && scoreGuest < scoreHome) {
        numberHome.classList.add("highlight")
        console.log("home team score highlight")
        
    } else if (scoreGuest > scoreHome && scoreHome < scoreGuest) {
        numberGuest.classList.add("highlight");
        console.log("guest team score highlight")
    
    } else {
        numberGuest.classList.remove("highlight");
        numberHome.classList.remove("highlight")
    
        console.log("no score highlight")
    }
}





function startTimer(duration, display) {
    
    let timer = duration, minutes, seconds
    let periodCount = 1

    display.innerText = timer

    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            periodCount += 1
            timer = 0
            timer = duration;
        }

        if (periodCount === 1) {
            periodStatus.innerText = "1/4"
            console.log("1st period")
    
        } else if (periodCount === 2) {
            periodStatus.innerText = "2/4"
            console.log("2nd period")
    
        } else if (periodCount === 3) {
            periodStatus.innerText = "3/4"
            console.log("3rd period")
    
        } else if (periodCount === 4) {
            periodStatus.innerText = "4/4"
            console.log("4th period")
        }

    }, 1000);

}

