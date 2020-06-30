for (let i = 0; i < 100; i++) {
  number = i + 1
  if (number % 3 == 0) {
    console.log('Fizz')
  } else if (number % 5 == 0) {
    console.log('Buzz')
  } else {
    console.log(number)
  }
}
