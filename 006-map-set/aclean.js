let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
	let map = new Map();
  for(let value of arr) {
  	let word = value.toLowerCase().split('').sort().join();
    map.set(word, value);
  }
  return Array.from(map.values());
}
