
/**
 * @param {number[]} numbers
 * @returns {number}
 */
function getBiggestNumber(numbers) {
  let biggestNumber = numbers[0];
  
  for (const number of numbers) {
    if (biggestNumber < number) {
      biggestNumber = number;
    } 
  }

  return biggestNumber

}
