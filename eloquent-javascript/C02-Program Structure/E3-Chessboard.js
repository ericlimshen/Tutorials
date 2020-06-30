size = 8
for (let i = 0; i < size; i++) {
  xAxis = i + 1
  row = ''
  for (let j = 0; j < size; j++) {
    yAxis = j + 1
    if (
      (xAxis % 2 == 0 && yAxis % 2 == 0) ||
      (xAxis % 2 != 0 && yAxis % 2 != 0)
    ) {
      row += '#'
    } else {
      row += ' '
    }
  }
  console.log(row)
}
