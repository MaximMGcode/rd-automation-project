

function addElements(elements) {
    if (elements.length <= 0) {
        throw new Error("Array is empty!");
    }

    let resultOfAddition = elements[0];

    for (let index = 1; index < elements.length; index++) {
        resultOfAddition += elements[index];
    }
    return resultOfAddition;
}

const arrayWithNumbers = [123, 33, 22, 10, 9, 8, 4, 66];
const arrayWithWords = ['Hello ', 'world', '.\n', 'I am ', 'trying', ' to', ' learn', ' JS'];

const res1 = addElements(arrayWithNumbers);
const res2 = addElements(arrayWithWords);
console.log(res1);
console.log(res2);
