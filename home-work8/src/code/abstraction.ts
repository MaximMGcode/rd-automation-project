
abstract class Car {

    public speed: number;
    public passengerCar: string;
    public engineType: string;


    public constructor(passengerCar: string, engineType: string) {
        this.speed = 0;
        this.passengerCar = passengerCar;
        this.engineType = engineType;

    }

    public StopEngine(): void {
        console.log('The engine of car stop');
    }

    public abstract startEngine(): void;
    public abstract pickUpSpeed(speed: number): void;
    public abstract showCarInfo(): void;

}

export class ElectricPorsche extends Car {

    public maxSpeedOfCar: number;
    public shapeOfCar: string;
    public engineType: string;

    public constructor(maxSpeedOfCar: number, shapeOfCar: string, engineType: string) {

        super(shapeOfCar, engineType);

        this.maxSpeedOfCar = maxSpeedOfCar;
        this.shapeOfCar = shapeOfCar;
        this.engineType = engineType;
    }

    public startEngine(): void {
        console.log(`The ${this.engineType} motor started quietly`);
    }
    public pickUpSpeed(carSpeed: number): void {
        if (this.speed >= this.maxSpeedOfCar) {
            console.log('The speed is maximum, do not accelerate the car.');
        } else {
            this.speed += carSpeed;
            console.log(`Current speed ${this.speed}`);
        }
    }
    public showCarInfo(): void {
        console.log(
            `The car has max speed is ${this.maxSpeedOfCar} and ` +
             `shape${this.shapeOfCar} and engine ${this.engineType}`
        );

    }


}
