import { expect } from 'chai';
import { ElectricCar } from '../src/modules/electric-car';
import { expectedResults } from './expected-results-data';

describe('Electric car test suite', () => {
    let electricTestCar: ElectricCar;
    describe('Test starEngine method', () => {

        before(() => {
            electricTestCar = new ElectricCar(
                'Electric Car',
                'Porsche Taycan',
                'Red',
                85
            );
        });

        it('Test: start of engine', () => {
            expect(electricTestCar.starEngine()).to.equal(expectedResults.starEngine);
        });
        it('Test: try to start engine that was started', () => {
            expect(electricTestCar.starEngine()).to.equal(expectedResults.stopEngineAgain);
        });
    });

    describe('Test turnOffEngine method', () => {
        before(() => {
            electricTestCar = new ElectricCar(
                'Electric Car',
                'Porsche Taycan',
                'Red',
                85
            );
        });

        it('Test: turn off the engine', () => {
            electricTestCar.starEngine();
            expect(electricTestCar.turnOffEngine()).to.equal(expectedResults.stopEngine);
        });
        it('Test: try to turn off engine that was stopped', () => {
            expect(electricTestCar.turnOffEngine()).to.equal(expectedResults.stopEngineThatAlreadyStopped);
        });
    });

    describe('Test pickUpSpeed method', () => {
        before(() => {
            electricTestCar = new ElectricCar(
                'Electric Car',
                'Porsche Taycan',
                'Red',
                85
            );
        });

        it('Test: pick more speed with started engine', () => {
            electricTestCar.starEngine();
            expect(electricTestCar.pickUpSpeed()).to.equal(expectedResults.pickUpSpeedInfo);
        });
        it('Test: pick more speed with NOT started engine', () => {
            electricTestCar.turnOffEngine();
            expect(electricTestCar.pickUpSpeed()).to.equal(expectedResults.canNotPickUpSpeed);
        });
        it('Test: pick more speed without charged battery', () => {
            electricTestCar.turnOffEngine();
            electricTestCar.decreaseBatteryCapacity(0);
            expect(electricTestCar.pickUpSpeed()).to.equal(expectedResults.canNotPickUpSpeed);
        });
    });

    describe('Test changeGear method', () => {
        before(() => {
            electricTestCar = new ElectricCar(
                'Electric Car',
                'Porsche Taycan',
                'Red',
                85
            );
        });

        it('Test: change gear to 3', () => {
            electricTestCar.starEngine();
            expect(electricTestCar.changeGear(3)).to.equal(`${expectedResults.successChangeGear} 3`);
        });
        it('Test: change gear with stopped engine', () => {
            electricTestCar.turnOffEngine();
            expect(electricTestCar.changeGear(3)).to.equal(expectedResults.failedChangeGear);
        });
        it('Test: change gear with start engine and without charged battery', () => {
            electricTestCar.starEngine();
            electricTestCar.decreaseBatteryCapacity(45);
            electricTestCar.drive();
            expect(electricTestCar.changeGear(3)).to.equal(expectedResults.failedChangeGear);
        });
    });

    describe('Test decreaseBatteryCapacity method', () => {
        before(() => {
            electricTestCar = new ElectricCar(
                'Electric Car',
                'Porsche Taycan',
                'Red',
                50
            );
        });

        it('Test: decrease battery capacity from 50 to 30', () => {
            electricTestCar.decreaseBatteryCapacity(20);
            expect(electricTestCar.batteryCapacity).to.equal(30);
        });
    });
});
