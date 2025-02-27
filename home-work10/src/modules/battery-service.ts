export interface IBatteryService {

    batteryCapacity: number;

    warmingUpBattery (temperature: number): void;
    decreaseBatteryCapacity (point:  number): void;

}
