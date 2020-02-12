let gameOrder = [];
let playerOrder = [];
let score = 0;
let winning = true;

let audioPlayer = new Audio();

class Color {
  constructor(name, source, audioSource){
    this.name = name;
    this.source = document.querySelector(source);
    this.audioSource = audioSource;
  }
}

let green = new Color("green", "#topLeft", "sounds/green.mp3");
let yellow = new Color("yellow", "#bottomLeft", "sounds/yellow.mp3");
let blue = new Color("blue", "#bottomRight", "sounds/blue.mp3");
let red = new Color("red", "#topRight", "sounds/red.mp3");

let colors = [green, yellow, blue, red]

let playButton = document.querySelector("#button1");
let resetButton = document.querySelector("#button2")
let scoreNumber = document.querySelector("#scoreNumber");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);


function play () {
	render();
	playButton.removeEventListener("click", play);
	setTimeout(aiTurn, 800);
}

function reset () {
	// clearColors();
	gameOrder = [];
	playerOrder = [];
	score = 0;
	winning = true;
	playButton.innerText = "Play";
	scoreNumber.innerText = "--";
	playButton.addEventListener("click", play);
}

function aiTurn () {
	gameOrder.push(returnColor());
	gameOrder.forEach((colorObject, i) => {
      setTimeout((i) => {
        colorObject.source.classList.add("blink");
        audioPlayer.src = colorObject.audioSource;
        audioPlayer.play();
        setTimeout(function(){
          colorObject.source.classList.remove("blink"); 
        }, 800);
      }, i * 1000);
  });
}

function targetColor (target) {
  if (target.id === "topLeft") { 
  	return colors[0] }
  if (target.id === "bottomLeft") {
  	return colors[1] }
  if (target.id === "bottomRight") {
  	return colors[2] }
  if (target.id === "topRight") {
  	return colors[3] }
}

function returnColor () {
  let colorsIndex = Math.floor(Math.random() * 4);
  return colors[colorsIndex];
}

function checkMatch () {
	for (let i = 0; i < playerOrder.length; i++) {
		if (playerOrder[i] !== gameOrder[i]) {
			winning = false;
		}
	}
}

function render () {
	if (winning) {
		playButton.innerText = "Playing";
  		scoreNumber.innerText = score;
  } else {
  		blinkColors();
  	  	scoreNumber.innerText = "NO!";
  }
}


function blinkColors () {
	green.source.style.background= "#FF0000";
	yellow.source.style.background= "#FF0000";
	blue.source.style.background= "#FF0000";
	red.source.style.background= "#FF0000";
}

function clearColors () {
	green.source.style.background= "green";
	red.source.style.background= "#C00000";
	yellow.source.style.background= "#C8C500";
	blue.source.style.background= "#00A8BB";
}




