let gameOrder = [];
let playerOrder = [];
let score = 0;
let winning = true;

let colors = [green, red, yellow, blue]

let playButton = document.querySelector("#button1");
let resetButton = document.querySelector("#button2")
let scoreNumber = document.querySelector("#scoreNumber");

let green = document.querySelector("#topLeft");
let red = document.querySelector("#topRight");
let yellow = document.querySelector("#bottomLeft");
let blue = document.querySelector("#bottomRight");

let greenAudio = document.querySelector("#greenAudio");
let yellowAudio = document.querySelector("#yellowAudio")
let blueAudio = document.querySelector("#blueAudio");
let redAudio = document.querySelector("#redAudio")


function clearColors () {
	topLeft.style.background= "green";
	topRight.style.background= "#C00000";
	bottomLeft.style.background= "#C8C500";
	bottomRight.style.background= "#00A8BB";
}

function blinkColors () {
	topLeft.style.background= "#00ff00";
	topRight.style.background= "#FF0000";
	bottomLeft.style.background= "yellow";
	bottomRight.style.background= "#00E5FF";
}




