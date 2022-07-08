
let selectedWord = "";
let maxLives = 6;
let lives = 6;
let guessed = [];
let wordStatus = null;
let totalWinsScore = 0;
let totalLossScore = 0;
let image = document.getElementById('placeholder')

var wordBank = [
  "apple",
  "school",
  "car",
  "games",
  "house",
  "gym",
  "orange",
  "banana",
  "boat",
  "motorcycle",
  "movies",
  "amusementpark",
];

function randomWord() {
  selectedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}


function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz".split("").map((letter) =>`<button class="btn btn-lg btn-primary m-2" id='` + letter + `' onClick="checkLetter('` + letter + `')" > ` + letter + ` </button> ` ).join("");
  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function checkLetter(letter) {
  guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;
  document.getElementById(letter).setAttribute("disabled", true);

  if (selectedWord.indexOf(letter) >= 0) {
    guessedWord();
    checkWin();
  } else if (selectedWord.indexOf(letter) === -1) {
    lives--;
    updatelives();
    checkLoss();
    nextImage();
    }
}

function checkWin() {
  if (wordStatus === selectedWord) {
    document.getElementById("keyboard").innerHTML = "You Win!";
    increaseTotalWin();
  }
}

function checkLoss() {
  if (lives === 0) {
    document.getElementById("wordLocation").innerHTML =
      "The word was: " + selectedWord;
    document.getElementById("keyboard").innerHTML = "You Lost!";
    document.getElementById("hint").innerHTML = null;
    increaseLoss();
  }
}
function hint() {
  if (selectedWord == "car") {
    document.getElementById("hint").innerHTML = "Used on Land";
  } else if (selectedWord == "apple") {
    document.getElementById("hint").innerHTML = "Keeps the Doctor Away";
  } else if (selectedWord == "school") {
    document.getElementById("hint").innerHTML = "You go here to Learn";
  } else if (selectedWord == "games") {
    document.getElementById("hint").innerHTML =
      "Halo, Connect 4, and Uno are classified as?";
  } else if (selectedWord == "gym") {
    document.getElementById("hint").innerHTML = "You go here to Exercise";
  } else if (selectedWord == "house") {
    document.getElementById("hint").innerHTML = "Comes with a Mortgage";
  } else if (selectedWord == "orange") {
    document.getElementById("hint").innerHTML =
      "Tangerines, Mandarins, Clementines";
  } else if (selectedWord == "banana") {
    document.getElementById("hint").innerHTML =
      "Overpowers the taste of smoothies";
  } else if (selectedWord == "motorcycle") {
    document.getElementById("hint").innerHTML = "Motorized Bike";
  } else if (selectedWord == "boat") {
    document.getElementById("hint").innerHTML = "Used in Water";
  } else if (selectedWord == "movies") {
    document.getElementById("hint").innerHTML = "Watched in Theaters";
  } else if (selectedWord == "amusementpark") {
    document.getElementById("hint").innerHTML = "Dorney Park / Six Flags";
  } else {
    document.getElementById("hint").innerHTML = "None Set";
  }
}

function category() {
  if (selectedWord == "car") {
    document.getElementById("categories").innerHTML = "Vehicle";
  } else if (selectedWord == "apple") {
    document.getElementById("categories").innerHTML = "Fruit";
  } else if (selectedWord == "school") {
    document.getElementById("categories").innerHTML = "Building";
  } else if (selectedWord == "games") {
    document.getElementById("categories").innerHTML = "Entertainment";
  } else if (selectedWord == "gym") {
    document.getElementById("categories").innerHTML = "Building";
  } else if (selectedWord == "house") {
    document.getElementById("categories").innerHTML = "Building";
  } else if (selectedWord == "orange") {
    document.getElementById("categories").innerHTML = "Fruit";
  } else if (selectedWord == "banana") {
    document.getElementById("categories").innerHTML = "Fruit";
  } else if (selectedWord == "motorcycle") {
    document.getElementById("categories").innerHTML = "Vehicle";
  } else if (selectedWord == "boat") {
    document.getElementById("categories").innerHTML = "Vehicle";
  } else if (selectedWord == "movies") {
    document.getElementById("categories").innerHTML = "Entertainment";
  } else if (selectedWord == "amusementpark") {
    document.getElementById("categories").innerHTML = "Entertainment";
  } else {
    document.getElementById("categories").innerHTML = "None Set";
  }
}

function guessedWord() {
  wordStatus = selectedWord
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordLocation").innerHTML = wordStatus;
}

function updatelives() {
  document.getElementById("lives").innerHTML = lives;
}

function clearHint() {
  document.getElementById("hint").innerHTML = "";
}

function reset() {
  image.src = "images/Podium.png"
  lives = 6;
  guessed = [];
  clearHint(); 
  randomWord();
  guessedWord();
  updatelives();
  generateButtons();
  category();
}

const increaseTotalWin = () => {
  totalWinsScore += 1;
  document.getElementById("totalWins").innerText = totalWinsScore;
};

const increaseLoss = () => {
  totalLossScore += 1;
  document.getElementById("totalLoss").innerText = totalLossScore;
};

function clearScore() {
  document.getElementById("totalWins").innerHTML = 0;
  document.getElementById("totalLoss").innerHTML = 0;
  totalWinsScore = 0;
  totalLossScore = 0;
  clearHint();
  // randomWord();
  // generateButtons();
  // guessedWord();
  // category();
}

//https://www.youtube.com/watch?v=DoVG1q71ZOU used for image change
function nextImage(){ 
  if (lives == 5) {
    image.src = "images/PodiumHead.png"
  } else if (lives == 4) {
    image.src = "images/PodiumBody.png"
  } else if (lives == 3) {
    image.src = "images/PodiumArm1.png"
  } else if (lives == 2) {
    image.src = "images/PodiumArm2.png"
  } else if (lives == 1) {
    image.src = "images/PodiumLeg1.png"
  } else if (lives == 0) {
    image.src = "images/PodiumLeg2.png"
  } else {
    console.log("End of Statement")
  }
}

document.getElementById("maxLives").innerHTML = maxLives;

randomWord();
generateButtons();
guessedWord();
category();
