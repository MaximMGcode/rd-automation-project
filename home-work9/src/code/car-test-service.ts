import { ICar } from './car';
import { IBatteryService } from './battery-service';

export function testCar (car: ICar): void {
    console.log(car.starEngine());
    car.pickUpSpeed();
    car.changeGear(3);
    car.drive();
}

export function testElectricCar (electricCar: IBatteryService, batteryCap: number): void {
    electricCar.warmingUpBattery(batteryCap);
    electricCar.decreaseBatteryCapacity(batteryCap);

}

