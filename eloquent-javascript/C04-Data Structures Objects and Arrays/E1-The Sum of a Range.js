function range(start, end, step = 1) {
  result = []
  do {
    result.push(start)
    start += step
  } while (start != end)
  result.push(start)
  return result
}

function sum(rangeNo) {
  let result = 0
  for (let i = 0; i < rangeNo.length; i++) {
    result += rangeNo[i]
  }
  return result
}
console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1))
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)))
// → 55
