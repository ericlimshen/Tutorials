function countBs(string) {
  counter = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] == 'B') {
      counter += 1
    }
  }
  return counter
}

function countChar(string, character) {
  counter = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i] == character) {
      counter += 1
    }
  }
  return counter
}

console.log(countBs('BBC'))
// → 2
console.log(countChar('kakkerlak', 'k'))
// → 4
