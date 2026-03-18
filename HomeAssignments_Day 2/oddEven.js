
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isOddOrEven(input) {
  if (input % 2 === 0) {
    console.log("Input number entered is EVEN");
  } else {
    console.log("Input number entered is ODD");
  }
}

rl.question("Enter a number: ", (value) => {
  const input = Number(value);

  if (Number.isNaN(input)) {
    console.log("Please enter a valid number");
  } else {
    isOddOrEven(input);
  }

  rl.close();
});