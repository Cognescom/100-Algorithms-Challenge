function addTwoDigits(n: number): number {
  return  Math.floor(n / 10) + n % 10
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(78));
console.log(addTwoDigits(56));
console.log(addTwoDigits(34));
