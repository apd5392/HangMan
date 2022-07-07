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

let answer = "";
let maxLives = 6;
let lives = 6;
let guessed = [];
let wordStatus = null;
let totalWinsScore = 0;
let totalLossScore = 0;

function randomWord() {
  answer = wordBank[Math.floor(Math.random() * wordBank.length)];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letter +
        `'
        onClick="checkLetter('` +
        letter +
        `')"
      >
        ` +
        letter +
        `
      </button>
    `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function checkLetter(letter) {
  guessed.indexOf(letter) === -1 ? guessed.push(letter) : null;
  document.getElementById(letter).setAttribute("disabled", true);

  if (answer.indexOf(letter) >= 0) {
    guessedWord();
    checkWin();
  } else if (answer.indexOf(letter) === -1) {
    lives--;
    updatelives();
    checkLoss();
    //insert way to have hangman actualy show using images.
  }
}

function checkWin() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Win!";
    increaseTotalWin();
  }
}

function checkLoss() {
  if (lives === 0) {
    document.getElementById("wordLocation").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost!";
    document.getElementById("hint").innerHTML = null;
    increaseLoss();
  }
}
function hint() {
  if (answer == "car") {
    document.getElementById("hint").innerHTML = "Used on Land";
  } else if (answer == "apple") {
    document.getElementById("hint").innerHTML = "Keeps the Doctor Away";
  } else if (answer == "school") {
    document.getElementById("hint").innerHTML = "You go here to Learn";
  } else if (answer == "games") {
    document.getElementById("hint").innerHTML =
      "Halo, Connect 4, and Uno are classified as?";
  } else if (answer == "gym") {
    document.getElementById("hint").innerHTML = "You go here to Exercise";
  } else if (answer == "house") {
    document.getElementById("hint").innerHTML = "Comes with a Mortgage";
  } else if (answer == "orange") {
    document.getElementById("hint").innerHTML =
      "Tangerines, Mandarins, Clementines";
  } else if (answer == "banana") {
    document.getElementById("hint").innerHTML = "Overpowers the taste of smoothies";
  } else if (answer == "motorcycle") {
    document.getElementById("hint").innerHTML = "Motorized Bike";
  } else if (answer == "boat") {
    document.getElementById("hint").innerHTML = "Used in Water";
  } else if (answer == "movies") {
    document.getElementById("hint").innerHTML = "Watched in Theaters";
  } else if (answer == "amusementpark") {
    document.getElementById("hint").innerHTML = "Dorney Park / Six Flags";
  } else {
    document.getElementById("hint").innerHTML = "None Set";
  }
}

function category() {
  if (answer == "car") {
    document.getElementById("categories").innerHTML = "Vehicle";
  } else if (answer == "apple") {
    document.getElementById("categories").innerHTML = "Fruit";
  } else if (answer == "school") {
    document.getElementById("categories").innerHTML = "Building";
  } else if (answer == "games") {
    document.getElementById("categories").innerHTML = "Entertainment";
  } else if (answer == "gym") {
    document.getElementById("categories").innerHTML = "Building";
  } else if (answer == "house") {
    document.getElementById("categories").innerHTML = "Building";
  } else if (answer == "orange") {
    document.getElementById("categories").innerHTML = "Fruit";
  } else if (answer == "banana") {
    document.getElementById("categories").innerHTML = "Fruit";
  } else if (answer == "motorcycle") {
    document.getElementById("categories").innerHTML = "Vehicle";
  } else if (answer == "boat") {
    document.getElementById("categories").innerHTML = "Vehicle";
  } else if (answer == "movies") {
    document.getElementById("categories").innerHTML = "Entertainment";
  } else if (answer == "amusementpark") {
    document.getElementById("categories").innerHTML = "Entertainment";
  } else {
    document.getElementById("categories").innerHTML = "None Set";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordLocation").innerHTML = wordStatus;
}

function updatelives() {
  document.getElementById("lives").innerHTML = lives;
}
function reset() {
  lives = 6;
  guessed = [];
  document.getElementById("hint").innerHTML = "";
  //reset hangman
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
}

document.getElementById("maxLives").innerHTML = maxLives;

randomWord();
generateButtons();
guessedWord();
category();

// function updateHangmanPicture() {
//   document.getElementById('hangmanPic').src = './images/' + lives + '.jpg';
// }
// updateHangmanPicture();
