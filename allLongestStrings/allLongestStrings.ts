function allLongestStrings(inputArray: string[]): string[] {
   let longestStrings = [];
   let longestLength = 0;
   inputArray.forEach(str => {
      longestLength = str.length > longestLength ? str.length : longestLength; 
   });
   inputArray.forEach(str => {
      if(str.length === longestLength){
         longestStrings.push(str);
      }
   })
   return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));