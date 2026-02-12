// 17? Implement the Truncate a String Algorithm
// repeat + slice

function truncateString(str, num) {
if (str.length > num) {
  let cut = str.slice(0,num)
  return cut + ".".repeat(3);
  } else {
    return str;
  }
}
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11)) 