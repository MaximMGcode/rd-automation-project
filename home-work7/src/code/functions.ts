
export function addElements(elements: number[] | string[]): string | number {
    if (elements.length === 0) {
        throw new Error('Array is empty!');
    }

    let resultOfAddition: (number | string) = elements[0];

    for (let index = 1; index < elements.length; index++) {
        if ( typeof elements[index] === 'string' &&
            typeof resultOfAddition === 'string'
        ){
            resultOfAddition += elements[index] as string;

        } else if (
            typeof elements[index] === 'number' &&
            typeof resultOfAddition === 'number'
        ){
            resultOfAddition += elements[index] as number;
        }
    }
    return resultOfAddition ;
}

const arrayWithNumbers = [123, 33, 22, 10, 9, 8, 4, 66];
const arrayWithWords = ['Hello ', 'world', '.\n', 'I am ', 'trying', ' to', ' learn', ' JS'];

const res1: number = addElements(arrayWithNumbers) as number;
const res2: string = addElements(arrayWithWords) as string;
console.log(res1);
console.log(res2);
