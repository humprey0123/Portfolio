// So I did this
// create the updateRecords Function with parameters records, id, prop, value

// if value == empty, delete prop

// if prop != tracks, prop = value

// if !props, create tracks with value in array

// if props, add value to the last of tracks array

// return the records
// and guided me to do this

const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value == "") {
    delete records[id][prop];
  } else if (prop != "tracks") {
    records[id][prop] = value;
  } else if (!records[id][prop]) {
    records[id][prop] = [value];
  } else if (records[id][prop]) {
    records[id][prop].push(value);
  }
  return records;
}

console.log(recordCollection);
console.log("\n\n\n\n");

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
