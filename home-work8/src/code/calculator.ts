
export class Calculator {

    private numberOne: number;
    private numberTwo: number;
    private sumOfNumbers: number | null;

    public constructor(numberOne: number, numberTwo: number) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        this.sumOfNumbers = null;
    }

    public addition(): void {
        this.sumOfNumbers = this.numberOne + this.numberTwo;
        console.log(`Sum of addition operation, ${this.numberOne} + ${this.numberTwo} = ${this.sumOfNumbers}`);
        this.sumOfNumbers = null;
    }
    public minus(): void {
        this.sumOfNumbers = this.numberOne - this.numberTwo;
        console.log(`Sum of minus operation, ${this.numberOne} - ${this.numberTwo} = ${this.sumOfNumbers}`);
        this.sumOfNumbers = null;
    }

    public multiply(): void {
        this.sumOfNumbers = this.numberOne * this.numberTwo;
        console.log(`Sum of multiply operation, ${this.numberOne} * ${this.numberTwo} = ${this.sumOfNumbers}`);
        this.sumOfNumbers = null;
    }

    public divide(): void {
        if (this.numberTwo === 0) {
            console.log('Error: Division by zero is not allowed.');
        } else {
            this.sumOfNumbers = this.numberOne / this.numberTwo;
            console.log(`Sum of divide operation, ${this.numberOne} / ${this.numberTwo} = ${this.sumOfNumbers}`);
            this.sumOfNumbers = null;
        }

    }
}
