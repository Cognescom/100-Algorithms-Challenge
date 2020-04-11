const ASTERISK = '*';

const createAsteriskString = (number: number): string =>{
  return ASTERISK.repeat(number);
}

function addBorder(picture: string[]): string[] {
  let maxLength = picture[0].length;
  let result = [];
  result.length = picture.length;
  picture.forEach(string => {
    if(string.length > maxLength) maxLength = string.length;
  });
  result.unshift(createAsteriskString(maxLength + 2));
  result.push(createAsteriskString(maxLength + 2));
  for (let i = 0; i < picture.length; i++) {
    let currLength = maxLength + 2 - picture[i].length;
    let isOdd = currLength % 2 === 0;
    if(isOdd){
      result[i+1] = createAsteriskString(currLength/2) + picture[i] + createAsteriskString(currLength/2);
    }else{
      result[i+1] = createAsteriskString(Math.floor(currLength/2)) + picture[i] + createAsteriskString(currLength - Math.floor(currLength/2));
    }
  }
  
  return result;
}

console.log(addBorder(["abcdddddds", "deddsd"]));
console.log(addBorder(["ab", "ded"]));

