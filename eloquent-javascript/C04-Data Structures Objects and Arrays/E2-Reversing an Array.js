function reverseArray(arrayInput) {
  result = []
  for (let i = arrayInput.length - 1; i != -1; i--) {
    result.push(arrayInput[i])
  }
  return result
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = old
  }
  return array
}
console.log(reverseArray(['A', 'B', 'C']))
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
// → [5, 4, 3, 2, 1]
