import { ICar } from './car';
import { IBatteryService } from './battery-service';

export class ElectricCar implements ICar, IBatteryService {

    public typeOfCar: string;
    public carModel: string;
    public carColor: string;
    public stateOfEngine: boolean;
    public batteryCapacity: number;

    private canRide: boolean;


    public constructor(
        typeOfCar: string,
        carModel: string,
        carColor: string,
        batteryCapacity: number
    ) {

        this.typeOfCar = typeOfCar;
        this.carModel = carModel;
        this.carColor = carColor;
        this.stateOfEngine = false;
        this.canRide = false;
        this.batteryCapacity = batteryCapacity;

    }

    public starEngine(): string {
        if (!this.stateOfEngine) {
            this.stateOfEngine = true;
            return `The ${this.carModel} car is ready to drive`;
        }
        return `The ${this.carModel} car already has the engine started`;
    }


    public turnOffEngine(): void {
        if (this.stateOfEngine) {
            this.stateOfEngine = false;
            console.log(`The ${this.carModel} car is turned off`);
        } else {
            console.log(`The ${this.carModel} car is already off`);
        }
    }

    public pickUpSpeed(): void {
        if (this.stateOfEngine && this.canRide) {
            console.log(`The ${this.carModel} car is picking up speed`);
        } else {
            console.log('Start the engine and make sure the battery is charged!');
        }
    }

    public changeGear(gear: number): void {
        if (this.stateOfEngine && this.canRide) {
            console.log(`The ${this.carModel} car changed to gear ${gear}`);
        } else {
            console.log('You cannot change gears without starting the engine and moving');
        }
    }


    private canDrive(batteryCap: number): boolean {
        if (batteryCap > 30) {
            return true;
        } else {
            console.log('Battery level is too low to drive');
            return false;
        }
    }

    public drive(): void {
        if (this.canDrive(this.batteryCapacity) === false) {
            console.log(`You can't drive battery has ${this.batteryCapacity}`);
        } else {
            console.log(`You can drive battery has ${this.batteryCapacity}`);
        }

    }
    public decreaseBatteryCapacity (point:  number): void {
        this.batteryCapacity -= point;
    }

    public warmingUpBattery(temperature: number): void {
        if (temperature < 0) {
            console.log('The battery is too cold. Warming up...');
            this.decreaseBatteryCapacity(10);
            console.log('Battery capacity decreased to ${this.batteryCapacity}%');
        } else if (temperature >= 0 && temperature < 15) {
            console.log('The battery is a bit cold. Heating up to optimal temperature...');
            this.decreaseBatteryCapacity(5);
            console.log('Battery capacity decreased to ${this.batteryCapacity}%');
        } else if (temperature >= 15 && temperature <= 30) {
            console.log('The battery is at an optimal temperature.');
        } else {
            console.log('The temperature is too high for the battery. Please cool it down.');
        }
    }
}
