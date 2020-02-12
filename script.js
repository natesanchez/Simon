let gameOrder = [];
let playerOrder = [];
let score = 0;
let winning = true;

// let greenAudio = document.querySelector("#greenAudio");
// let yellowAudio = document.querySelector("#yellowAudio")
// let blueAudio = document.querySelector("#blueAudio");
// let redAudio = document.querySelector("#redAudio")

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

function returnColor () {
  let colorsIndex = Math.floor(Math.random() * 4);
  return colors[colorsIndex];
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



