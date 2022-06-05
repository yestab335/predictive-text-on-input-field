// Variables
let words = ["Apple", "Pencil", "Pen", "Chair", "Helmet", "Grapes", "Tub", "Trophy", "Cookie", "Donut", "Shirt", "Bat", "Ash", "Bell", "Chat", "Ball", "Eye", "Fish", "Zip", "Game", "Juice", "Orange", "Fan", "Ice"];

words.sort();

let input = document.getElementById("input");
let suggestion = document.getElementById("suggestion");

// Enter Key Code
const enterKey = 13;

window.onload = () => {
  input.value = "";
  clearSuggestion();
};

const clearSuggestion = () => {
  suggestion.innerHTML = "";
};

const caseCheck = (word) => {
  // Array Of Characters
  word = word.split("");
  let inp = input.value;
  // Loop Through Every Character In Ino
  for (let i in inp) {
    // If Input Character Matches With Character In Word No Need To Change
    if (inp[i] == word[i]) {
      continue;
    } else if (inp[i].toUpperCase() == word[i]) {
      // If inp[i] When Converted To Uppercase Matches word[i] It Means word[i] Needs To Be Lowercase
      word.splice(i, 1, word[i].toLowerCase());
    } else {
      // word[i] Needs To Be Uppercase
      word.splice(i, 1, word[i].toUpperCase());
    }
  }

  // Array To String
  return word.join("");
};

// Execute Function On Input
input.addEventListener("input", (e) => {
  clearSuggestion();
  // Convert Input Value To regex Since string.startsWith() Is Case Sensitive
  let regex = new RegExp("^" + input.value, "i");
  // Loop Through Words Array
  for (let i in words) {
    // Check If Input Matches With Any Word In Words Array
    if (regex.test(words[i]) && input.value != "") {
      // Change Case Of Word In Words Array According To User Input
      words[i] = caseCheck(words[i]);
      // Display Suggestion
      suggestion.innerHTML = words[i];
      break;
    }
  }
});

// Complete Predictive Text On Enter Key
input.addEventListener("keydown", (e) => {
  // When User Presses Enter And Suggestion Exists
  if (e.keyCode == enterKey && suggestion.innerText != "") {
    e.preventDefault();
    input.value = suggestion.innerText;
    // Clear The Suggestion
    clearSuggestion();
  }
});