// 14 ata? Build a Card Counting Assistant

let count = 0;

function cardCounter(card) {
  if (card >= 2 && card <= 6) {
    count += 1;
  } else if (card >= 7 && card <= 9) {
    count;
  } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
    count -= 1;
  }
  if (count <= 0) {
    return count + " Hold";
  } else if (count >= 1) {
    return count + " Bet";
  }
}

console.log(cardCounter())






// switch style (gpt)
// let count = 0;

// function cardCounter(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count += 1;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       // do nothing, count stays the same
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count -= 1;
//       break;
//     default:
//       // optional: handle unexpected input
//       break;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// }

// console.log(cardCounter(5));  // example
// console.log(cardCounter("K")); // example
