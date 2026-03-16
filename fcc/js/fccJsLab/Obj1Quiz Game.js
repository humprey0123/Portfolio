const array = {
  category:"Programming", 
  question:"What is a variable with collection of values?", 
  choices: ["array", "object", "string"],
  answer: "array"
};

const object = {
  category:"Programming", 
  question:"What consists of key/value pairs?", 
  choices: ["object", "array", "number"], 
  answer: "object"
};

const platinum = {
  category:"Brand", 
  question:"Which product is peaker that is also araoke and have wheels?", 
  choices: ["pk10", "lx15", "dk65"], 
  answer: "pk10"
  };

const genshin = {
  category:"game", 
  question:"What is the name of the female main character of the game called Genshin?", 
  choices: ["Lumine", "Aether", "Luffy"], 
  answer: "Lumine"
};

const wuwa = {
  category:"game", 
  question:"What is the first element of the main character in the game called Wuthering Waves?", 
  choices: ["Electro", "Aero", "Spectro"], 
  answer: "Spectro" 
  };

const questions = [array, object, platinum, genshin, wuwa]; 

function getRandomQuestion(randomQuestion) {
  return randomQuestion[Math.floor(randomQuestion.length * Math.random())]
}
function getRandomComputerChoice (randomChoice) {
  return randomChoice[Math.floor(randomChoice.length * Math.random())]
}
function getResults(getRandomQuestion, getRandomComputerChoice) {
  if (getRandomQuestion.answer == getRandomComputerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${getRandomQuestion.answer}`
  }
}

console.log(getRandomQuestion(questions));
