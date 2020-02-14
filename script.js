let gameOrder = [];
let playerOrder = [];
let score = 0;
let winning = true;
let allowClick = false;

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
let resetButton = document.querySelector("#button2");
let scoreNumber = document.querySelector("#scoreNumber");

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

green.source.addEventListener('click', playerTurn);
yellow.source.addEventListener('click', playerTurn);
blue.source.addEventListener('click', playerTurn);
red.source.addEventListener('click', playerTurn);


function play () {
	render();
	playButton.removeEventListener("click", play);
	setTimeout(aiTurn, 800);
}

function reset () {
  clearColors();
	gameOrder = [];
	playerOrder = [];
	score = 0;
	winning = true;
	playButton.innerText = "Play";
	scoreNumber.innerText = "--";
	playButton.addEventListener("click", play);
}

function letClick () {
  allowClick = true;
}

function aiTurn () {
  let itemsProcessed = 0;
  allowClick = false
	gameOrder.push(returnColor());
	gameOrder.forEach((colorObject, index) => {
      setTimeout((index) => {
        colorObject.source.classList.add("blink");
        audioPlayer.src = colorObject.audioSource;
        audioPlayer.play();
        itemsProcessed ++
        if(itemsProcessed === gameOrder.length) {
            letClick();
             } 
        setTimeout(function(){
          colorObject.source.classList.remove("blink"); 
        }, 800);
      }, index * 1100);
  })
}


function playerTurn (e) {
  if (allowClick == true) {
	if (gameOrder.length === 0 ){
		return;}
	pushPlayerInput(e);
	checkMatch(playerOrder, gameOrder)
	if (winning && (playerOrder.length === gameOrder.length)) {
	playerOrder = [];
    score++;
    render();
    setTimeout(aiTurn, 1100);
  } else {
    render();
  }
}
}

function pushPlayerInput (e) {
  if (allowClick == true) {
  if(playerOrder.length > gameOrder.length) {
  	return; }
  if (!winning) {
  	return; }
  	let colorObject = targetColor(e.target);
  	audioPlayer.src = colorObject.audioSource;
  	audioPlayer.play();
  	playerOrder.push(colorObject)
  }
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
  colors.forEach((color) => {
    color.source.classList.add("wrong");
  })
}

function clearColors () {
  colors.forEach((color) => {
    color.source.classList.remove("wrong");
  })
}




