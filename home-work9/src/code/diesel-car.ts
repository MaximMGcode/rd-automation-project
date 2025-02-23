import { ICar } from './car';

export class DieselCar implements ICar {

    public typeOfCar: string;
    public carModel: string;
    public carColor: string;
    public stateOfEngine: boolean;

    private fuelCapacity: number;

    public constructor(
        typeOfCar: string,
        carModel: string,
        carColor: string,
        fuelCapacity: number
    ) {
        this.typeOfCar = typeOfCar;
        this.carModel = carModel;
        this.carColor = carColor;
        this.stateOfEngine = false;
        this.fuelCapacity = fuelCapacity;
    }

    public starEngine(): string {
        if (!this.stateOfEngine) {
            this.stateOfEngine = true;
            return `The ${this.carModel} diesel car is ready to drive`;
        }
        return `The ${this.carModel} diesel car already has the engine started`;
    }

    public turnOffEngine(): void {
        if (this.stateOfEngine) {
            this.stateOfEngine = false;
            console.log(`The ${this.carModel} diesel car is turned off`);
        } else {
            console.log(`The ${this.carModel} diesel car is already off`);
        }
    }

    public pickUpSpeed(): void {
        if (this.stateOfEngine && this.fuelCapacity > 0) {
            console.log(`The ${this.carModel} diesel car is picking up speed`);
        } else if (this.fuelCapacity === 0) {
            console.log(`The ${this.carModel} diesel car has no fuel`);
        } else {
            console.log('Start the engine first!');
        }
    }

    public changeGear(gear: number): void {
        if (this.stateOfEngine && this.fuelCapacity > 0) {
            console.log(`The ${this.carModel} diesel car changed to gear ${gear}`);
        } else if (this.fuelCapacity === 0) {
            console.log(`The ${this.carModel} diesel car has no fuel`);
        } else {
            console.log('You cannot change gears without starting the engine and having fuel');
        }
    }

    private canDrive(): boolean {
        return this.fuelCapacity > 0;
    }

    public drive(): void {
        if (this.canDrive()) {
            console.log(`You can drive the ${this.carModel} diesel car`);
        } else {
            console.log(`You can't drive. ${this.carModel} has no fuel`);
        }
    }
}
