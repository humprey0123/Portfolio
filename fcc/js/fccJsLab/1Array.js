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





// 2nd attempt
let lunches = [];

function addLunchToEnd(lunchesArr, lunchItem) {
  lunchesArr.push(lunchItem)
  console.log(`${lunchItem} added to the end of the lunch menu.`)
  return lunchesArr;
}
function addLunchToStart(lunchesArr, lunchItem) {
  lunchesArr.unshift(lunchItem)
  console.log(`${lunchItem} added to the start of the lunch menu.`)
  return lunchesArr;
}

function removeLastLunch(lunchesArr) {
  if (lunchesArr.length > 0) {
    console.log(lunchesArr.pop() + " removed from the end of the lunch menu.")
    return lunchesArr
  } else {
    console.log("No lunches to remove.");
  }
}
function removeFirstLunch(lunchesArr) {
  if (lunchesArr.length > 0) {
    console.log(lunchesArr.shift() + " removed from the start of the lunch menu.")
    return lunchesArr
  } else {
    console.log("No lunches to remove.");
  }
}
function getRandomLunch(Param) {
  if (Param == 0) {
    console.log("No lunches available.")
  } else if (Param >= 1) {
    Param.length *
  }
}
lunches.push("Borger saka fries", "Hotdog");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"))
console.log(removeLastLunch(lunches))