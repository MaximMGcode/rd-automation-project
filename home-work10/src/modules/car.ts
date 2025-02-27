
export interface ICar {
    typeOfCar: string;
    carModel: string;
    carColor: string;
    stateOfEngine: boolean;

    starEngine (): string;
    turnOffEngine (): void;
    pickUpSpeed (): void;
    changeGear (gear: number): void;
    drive (): void;
}

