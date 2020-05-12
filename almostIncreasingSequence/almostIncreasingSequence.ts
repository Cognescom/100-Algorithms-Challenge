function almostIncreasingSequence(sequence: number[]): boolean {
   let isIncreasingSequence = true;
   let isRemovingItem = false;
   for(let i = 0; i < sequence.length - 1; i++ ){
      if(sequence[i] >= sequence[i+1]){
         if(!isRemovingItem){
            isRemovingItem=!isRemovingItem;
         }else{
            if(isIncreasingSequence){
               isIncreasingSequence=!isIncreasingSequence;
            }
         } 
      }
   }
   return isIncreasingSequence;
}

console.log(almostIncreasingSequence([1, 3, 1, 1, 1, 3])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([1, 3, 2, 1])) 