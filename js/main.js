function countCharacters() {
  // characters with spaces
  let text = document.getElementById("inputText").value;
  let count = text.length;
  // characters without spaces
  let textWithoutSpaces = text.replace(/\s/g, "");
  let countWithoutSpaces = textWithoutSpaces.length;
  // words
  let words = text.split(/\s+/).filter((word) => word !== "");
  let countWords = words.length;
  // numbers
  let numbers = text.match(/\d+/g) || [];
  numbers > 1 ? (numbers = numbers.flatMap((str) => str.split(""))) : numbers;
  let countNumbers = numbers ? numbers.length : 0;
  // sum numbers
  let sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
  // average length of words
  let averageLength = countWithoutSpaces / countWords;
  averageLength = averageLength ? averageLength.toFixed(2) : 0;
  // display the result
  document.getElementById("counter").innerHTML = count;
  document.getElementById("withoutSpaces").innerHTML = countWithoutSpaces;
  document.getElementById("words").innerHTML = countWords;
  document.getElementById("numbers").innerHTML = countNumbers;
  document.getElementById("sum").innerHTML = sum;
  document.getElementById("average").innerHTML = averageLength;
}

// clear the input
function clearInput() {
  document.getElementById("inputText").value = "";
  countCharacters();
}
