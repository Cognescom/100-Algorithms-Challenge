function adjacentElementsProduct(inputArray: number[]): number {
  let maxAdjacentProduct = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    let product = inputArray[i] * inputArray[i+1];
    if(product > maxAdjacentProduct) maxAdjacentProduct = product;    
  }
  return maxAdjacentProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));