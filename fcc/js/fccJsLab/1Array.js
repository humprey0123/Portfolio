const lunches = [];

function addLunchToEnd(LunchAddEnd) {
  lunches.push(LunchAddEnd)
  return console.log(`${LunchAddEnd} added to the end of the lunch menu.`)
}
function addLunchToStart(LunchAddStart) {
  lunches.unshift(LunchAddStart)
  return console.log(`${LunchAddStart} added to the end of the lunch menu.`)
}

addLunchToEnd("Bulgogi");
addLunchToEnd("Citrus");
addLunchToStart("Apple")
console.log("Lunch: "+lunches.join(", "));


function removeLunchToEnd() {
  return console.log(`${lunches.pop()} removed to the end of the lunch menu.`)
}
function removeLunchToStart() {
  return console.log(`${lunches.shift()} added to the end of the lunch menu.`)
}

removeLunchToEnd()
removeLunchToStart()
console.log("Lunch: "+lunches.join(", "));
