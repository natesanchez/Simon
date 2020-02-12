let gameOrder = [];
let playerOrder = [];
let score = 0;
let winning = true;

let greenAudio = document.querySelector("#greenAudio");
let yellowAudio = document.querySelector("#yellowAudio")
let blueAudio = document.querySelector("#blueAudio");
let redAudio = document.querySelector("#redAudio")

let audioPlayer = new Audio();

class Color {
  constructor(name, source, audioSource){
    this.name = name;
    this.source = document.querySelector(source);
    this.audioSource = audioSource;
  }
}

let green = new Color("green", "#topLeft", greenAudio);
let yellow = new Color("yellow", "#bottomLeft", yellowAudio);
let blue = new Color("blue", "#bottomRight", blueAudio);
let red = new Color("red", "#topRight", redAudio);

let colors = [green, yellow, blue, red]

let playButton = document.querySelector("#button1");
let resetButton = document.querySelector("#button2")
let scoreNumber = document.querySelector("#scoreNumber");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function play () {
	render();
	playButton.removeEventListener("click", play);
}

function reset () {
	let gameOrder = [];
	let playerOrder = [];
	let score = 0;
	let winning = true;
	playButton.innerText = "Play";
	scoreNumber.innerText = "--"
	playButton.addEventListener("click", play);
}

function aiTurn () {

}

function returnColor () {
  let colorsIndex = Math.floor(Math.random() * 4);
  console.log(colors[colorsIndex]);
}

function checkMatch () {

}

function render () {
	if (winning) {
		playButton.innerText = "Playing";
  		scoreNumber.innerText = score;
  } else {
  	  	scoreNumber.innerText = "NO!";
  }
}

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

returnColor();



