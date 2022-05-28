function readNumber() {
  let input = prompt("Enter a number please?");
  if (input === null || input === "") {
    return null;
  }
  if (isNaN(input)) {
    return readNumber();
  }
  
  return input;
}


console.log(readNumber());
