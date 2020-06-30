// The previous chapter introduced the standard function Math.min that returns its smallest
// argument.We can build something like that now.Write a function min that takes two arguments
// and returns their minimum.

let min = (x, y) => {
  if (x > y) {
    return y
  } else {
    return x
  }
}
console.log(min(0, 10))
// → 0
console.log(min(0, -10))
// → -10
