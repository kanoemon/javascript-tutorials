let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);
readMessages.add(messages[2]);

console.log(readMessages.has(messages[2]));

messages.shift();

console.log(readMessages.has(messages[2]));
