//  Create number variables
const numberVariable = 100;
const floatNumberVariable = 99.0;

//  Create string variables
const stringVariable = 'Hello, world!';
const stringWithNumberVariable = '3';

//  Create boolean variables
const booleanTrueVariable = true;
const booleanFalseVariable = false;

//  Create variables without values
const nullVariable = null;
const undefinedVariable = undefined;


//  Operations between variables others types
const newString1 = numberVariable + ' ' + stringVariable;
console.log(newString1);

const newString2 = stringVariable + stringVariable + booleanFalseVariable;
console.log(newString2);

const newString3 = nullVariable + booleanTrueVariable;
console.log(newString3);

const newNumber1 = floatNumberVariable / stringWithNumberVariable;
console.log(newNumber1);

const newNumber2 = booleanTrueVariable + numberVariable;
console.log(newNumber2);

const newNumber3 = booleanFalseVariable * undefinedVariable;
console.log(newNumber3);

const newNumber4 = floatNumberVariable + booleanTrueVariable;
console.log(newNumber4);
