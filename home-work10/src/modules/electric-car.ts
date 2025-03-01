import { ICar } from './car';


export class ElectricCar implements ICar {

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

    private canDrive(batteryCap: number): boolean {
        if (batteryCap > 30) {
            return true;
        }
        return false;

    }

    public starEngine(): string {
        if (!this.stateOfEngine) {
            this.stateOfEngine = true;
            this.canRide = true;
            return `The ${this.carModel} car is ready to drive`;
        }
        return `The ${this.carModel} car already has the engine started`;
    }


    public turnOffEngine(): string {
        if (this.stateOfEngine) {
            this.stateOfEngine = false;
            this.canRide = false;
            return `The ${this.carModel} car is turned off`;
        }
        return `The ${this.carModel} car is already off`;
    }

    public pickUpSpeed(): string {
        if (this.stateOfEngine && this.canRide) {
            return `The ${this.carModel} car is picking up speed`;
        }
        return 'Start the engine and make sure the battery is charged!';

    }

    public changeGear(gear: number): string {
        if (this.stateOfEngine && this.canRide) {
            return `The ${this.carModel} car changed to gear ${gear}`;
        }
        return 'You cannot change gears without starting the engine or without battery capacity';

    }

    public drive(): string {
        if (this.canDrive(this.batteryCapacity) === false) {
            this.batteryCapacity -= 5;
            return `You driving battery has ${this.batteryCapacity}`;
        }
        this.canRide = false;
        this.batteryCapacity -= 5;
        return `You can drive battery has ${this.batteryCapacity}` ;

    }
    public decreaseBatteryCapacity (point:  number): void {
        this.batteryCapacity -= point;
    }

}
