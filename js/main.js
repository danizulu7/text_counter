// update the display
function updateCounter() {
  let text = document.getElementById("inputText").value;
  // display the result
  document.getElementById("counter").innerHTML = countCharacters(text);
  document.getElementById("withoutSpaces").innerHTML =
    countCharactersWithoutSpaces(text);
  document.getElementById("words").innerHTML = countWords(text);
  document.getElementById("numbers").innerHTML = countNumbers(text);
  document.getElementById("sum").innerHTML = sumNumbers(text);
  document.getElementById("average").innerHTML = calculateAverageLength(text);
}

let countCharacters = (text) => text.length; 

let countCharactersWithoutSpaces = (text) => text.replace(/\s/g, "").length;

let countWords = (text) =>
  text.split(/\s+/).filter((word) => word !== "").length;

let countNumbers = (text) => {
  let numbers = text.match(/\d+/g) || [];
  numbers > 1 ? (numbers = numbers.flatMap((str) => str.split(""))) : numbers;
  return numbers ? numbers.length : 0;
};

let sumNumbers = (text) => {
  let numbers = text.match(/\d+/g) || [];
  numbers > 1 ? (numbers = numbers.flatMap((str) => str.split(""))) : numbers;
  return numbers.reduce((acc, num) => acc + parseInt(num), 0);
};

let calculateAverageLength = (text) => {
  let words = text.split(/\s+/).filter((word) => word !== "");
  let countWords = words.length;
  let countCharactersWithoutSpaces = text.replace(/\s/g, "").length;
  return countWords > 0
    ? (countCharactersWithoutSpaces / countWords).toFixed(2)
    : 0;
};

function clearInput() {
  document.getElementById("inputText").value = "";
  updateCounter();
}
