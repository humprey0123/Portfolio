// Starting and end buttons
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

//Screens
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const gameContainer = document.getElementById("gameContainer");
const gameOverScreen = document.getElementById("gameOverScreen");

//Game areas
const textPlace = document.getElementById("textPlace");
const cave = document.getElementById("cave");
const forest = document.getElementById("forest");
const sea = document.getElementById("sea");
const river = document.getElementById("river");

//Buttons
const goForestBtn = document.getElementById("goForestBtn");
const goRiverBtn = document.getElementById("goRiverBtn");
const goSeaBtn = document.getElementById("goSeaBtn");
const goCaveBtn = document.getElementById("goCaveBtn");

//Player stats
const health = document.getElementById("healthBar");
const hunger = document.getElementById("hungerBar");
const thirst = document.getElementById("thirstBar");

health.value = 100;
hunger.value = 50;
thirst.value = 50;

startButton.addEventListener("click", () => {
   startScreen.style.display = "none";
   gameScreen.style.display = "block";
   whereToGo();
});

function whereToGo() {
   textPlace.textContent =
      "Your plane crashed and you are lost. You have to survive. You can explore the cave, the forest, the sea or the river. Which one do you want to explore first?";
   goForestBtn.innerHTML = "Go to the Forest";
   goSeaBtn.innerHTML = "Go to the Sea";
   goRiverBtn.innerHTML = "Go to the River";
   goCaveBtn.innerHTML = "Go to the Cave";

   goForestBtn.addEventListener("click", goToForest);
   goSeaBtn.addEventListener("click", goToSea);
   goRiverBtn.addEventListener("click", goToRiver);
   goCaveBtn.addEventListener("click", goToCave);
}

let caveVisited = false;

function goToCave() {
   hideAll();
   hideText();
   cave.style.display = "block";
   if (!caveVisited) {
      cave.innerHTML =
         "<h2>Explore the Cave</h2><p>Dark and some animals might live there. Are you sure you want to enter?</p><button onclick='exploreCave()'>Enter the Cave</button>";
   } else if (caveVisited) {
      cave.innerHTML =
         "<h2>Do you want to return to the cave?</h2><button onclick='goToCave()'>Return to the Cave</button>";
   }

   document.getElementById("cave").addEventListener("click", goCave);
}

let caveSafe = Math.round(Math.random());
function goCave() {
   hideAll();
   if (!caveVisited) {
      textPlace.textContent =
         "You step into the cave, the darkness enveloping you but it doesn't go deep and seems like a safe place to rest.";
      caveVisited = true;
   } else if (caveSafe) {
      cave.innerHTML =
         "<h2>You checked the cave and it seems safe</h2><button>Cook</button><button>Rest</button><button>Craft</button>";
   } else {
      cave.textContent =
         "You saw an animal lurking in the cave.<button>Attack</button>";
   }
}

function goToForest() {
   hideAll();
   hideText();
   forest.style.display = "block";
   forest.innerHTML =
      "<h2>Explore the Forest</h2><p>Dense trees and unknown sounds await. Do you dare to venture in?</p><button onclick='exploreForest()'>Enter the Forest</button>";

   document.getElementById("forest").addEventListener("click", goForest);
}
function goToSea() {
   hideAll();
   hideText();
   sea.style.display = "block";
   sea.innerHTML =
      "<h2>Head to the Sea</h2><p>The sound of waves and salty air beckon. Will you brave the open waters?</p><button onclick='exploreSea()'>Go to the Sea</button>";

   document.getElementById("sea").addEventListener("click", goSea);
}
function goToRiver() {
   hideAll();
   hideText();
   river.style.display = "block";
   river.innerHTML =
      "<h2>Follow the River</h2><p>The river's flow promises both danger and discovery. Will you follow its path?</p><button onclick='exploreRiver()'>Follow the River</button>";

   document.getElementById("river").addEventListener("click", goRiver);
}

function hideAll() {
   cave.style.display = "none";
   forest.style.display = "none";
   sea.style.display = "none";
   river.style.display = "none";
}
function hideText() {
   textPlace.textContent = "";
}

function goForest() {
   hideAll();
   textPlace.textContent =
      "You step into the forest, the canopy above blocking out most of the light. Strange noises surround you, and you feel like you're being watched.";
   gameOver();
}

function goSea() {
   hideAll();
   textPlace.textContent =
      "You head to the sea, the salty breeze filling your lungs. As you walk along the shore, you see a boat in the distance. Do you try to signal it?";
   gameOver();
}

function goRiver() {
   hideAll();
   textPlace.textContent =
      "You follow the river, the sound of flowing water guiding you. As you walk, you notice something glinting in the water. Do you investigate?";
   gameOver();
}

function gameOver() {
   gameContainer.style.display = "none";
   gameOverScreen.style.display = "block";
}

restartButton.addEventListener("click", () => {
   gameOverScreen.style.display = "none";
   gameContainer.style.display = "none";
   startScreen.style.display = "block";

   // reset text
   textPlace.textContent =
      "Your Plane crashed and you are lost. You have to survive. You can explore the cave, the forest, the sea or the river. Which one do you want to explore first?";
   forest.innerHTML = "";
   sea.innerHTML = "";
   river.innerHTML = "";
});
