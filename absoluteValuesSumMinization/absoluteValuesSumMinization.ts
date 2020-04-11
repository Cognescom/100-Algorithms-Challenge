function absoluteValuesSumMinimization(a: number[]): number {
  let results = [];
  let summ;
  for (let i = 0; i < a.length; i++) {
    summ = 0;
    for (let j = 0; j < a.length; j++) {
      summ += Math.abs(a[j] - a[i]);
    }
    results.push(summ);
  }
  let min = results[0];
  results.forEach((number) => {
    if (number < min) min = number;
  });
  console.log(results.indexOf(min));
  return a[results.indexOf(min)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
