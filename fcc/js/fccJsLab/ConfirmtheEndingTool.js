// 18 ata Build a Confirm the Ending Tool

function confirmEnding(string, find) {
  let length = string.length - find.length;
  return string.includes(find, length);
}