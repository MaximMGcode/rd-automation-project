
const fruits = ['pomegranate', 'Banana', 'Apple', 'Peach', 'Orange', 'Mango', 'Strawberry', 'fig'];
const numbers = [213, 43242, 21, 121, 10.0, 213, -Infinity, Infinity, NaN];
const booleansValues = [true, false, true, false, true];
const multiTypesArray = [true, 'hello world', 777, 999.01, NaN, false, [1, 2]];


const filteredArrayWithStrings = fruits.filter((letter) => letter.length % 2 == 0);
console.log(filteredArrayWithStrings);

const foundElement = multiTypesArray.find((any) => typeof any == typeof []);
console.log(foundElement);

const sortedArrayLengthLetter = fruits.sort((boolVal1, boolVal2) => boolVal1.length - boolVal2.length);
console.log(sortedArrayLengthLetter);

const mergedArrays = [].concat(numbers).concat(booleansValues);
console.log(mergedArrays);

const isThereApple = fruits.includes('Apple');
console.log(isThereApple);

const textFromFruits = fruits.join('***');
console.log(textFromFruits);

const newArray = [...numbers, ...booleansValues];
console.log(newArray);

const shortFruits = [];
fruits.forEach((letter) => {
    if (letter.length < 5) {
        shortFruits.push(letter);
    }
});
console.log(shortFruits);
