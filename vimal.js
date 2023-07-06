array = ["a", "b", "c", "a", "b", "c", "a", "e"];
let count = array.reduce((acc, currval) => {
  if (acc[currval]) acc[currval]++;
  else acc[currval] = 1;
  return acc;
}, {});
console.log(count);

/*
function Duplicates(arr) {
  var counts = {};

  // Count occurrences of each string
  arr.forEach(function (string) {
    counts[string] = (counts[string] || 0) + 1;
  });

  // Print the strings with odd counts
  for (var string in counts) {
    if (counts[string] % 2 !== 0) {
      console.log(string + ": " + counts[string]);
    }
  }
}

// Example usage
var strings = ["a", "b", "c", "a", "b", "c", "a", "e"];
Duplicates(strings);

*/

function findStringDuplicates(arr) {
  var counts = arr.reduce(function (obj, string) {
    obj[string] = (obj[string] || 0) + 1;
    return obj;
  }, {});

  // Print the strings with their counts
  for (var string in counts) {
    if (counts[string] % 2 !== 0) {
      console.log(string + " count add: " + counts[string]);
    } else {
      console.log(string + " count even: " + counts[string]);
    }
  }
}

// Example usage
var strings = ["a", "b", "c", "a", "b", "c", "a", "e"];
findStringDuplicates(strings);
