let words = [];
let word = "";

while (word.toLowerCase() != "stop") {
  word = prompt("Enter a word (or type 'stop' to exit):");
  if (word.toLowerCase() != "stop") {
    words.push(word);
  }
}

if (words.length > 0) {
  console.log("The words you entered are: " + words.join(", "));
} else {
  console.log("You didn't enter any words.");
}
