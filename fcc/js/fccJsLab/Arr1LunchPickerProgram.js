// ?? Array 1 Lunch Picker Program.
// Push, Pop, Shift, Unshift, Length, Join - Math.random(), Math.floor()

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
function getRandomLunch(lunchArr) {
  let lunlen = lunchArr.length;
  if (lunlen == 0) {
    console.log("No lunches available.")
  } else if (lunlen >= 1) {
    let randomNum = Math.floor(lunlen * Math.random())
    console.log("Randomly selected lunch: "+lunchArr[randomNum])
  }
}
function showLunchMenu(Param) {
  if (Param.length == 0) {
    console.log("The menu is empty.")
  } else { 
    console.log("Menu items: "+Param.join(", "))
  }
}

addLunchToEnd(lunches, "Burger")
addLunchToStart(lunches, "Pizza")
getRandomLunch(lunches);
showLunchMenu(lunches)