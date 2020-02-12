let gameOrder = [];
let playerOrder = [];
let blink;
let playerTurn;
let gameTurn
let perfect;
let Interval;
let sound = true
let win;

let scoreCounter = document.querySelector("h3");
//Boxes
let topLeft = document.querySelector("#topLeft");
let topRight = document.querySelector("#topRight");
let bottomLeft = document.querySelector("#bottomLeft");
let bottomRight = document.querySelector("#bottomRight");
//Audio
let greenAudio = document.querySelector("#greenAudio");
let yellowAudio = document.querySelector("#yellowAudio")
let blueAudio = document.querySelector("#blueAudio");
let redAudio = document.querySelector("#redAudio")

topLeft.addEventListener("click", greenSound);
topRight.addEventListener("click", redSound);
bottomLeft.addEventListener("click", yellowSound);
bottomRight.addEventListener("click", blueSound);



function greenSound () {
	greenAudio.play();
}

function yellowSound () {
	yellowAudio.play();
}

function blueSound () {
	blueAudio.play();
}

function redSound () {
	redAudio.play();
}