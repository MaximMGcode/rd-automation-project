import { expect } from 'chai';
import { ElectricCar } from '../src/modules/electric-car';
import { testCar } from '../src/modules/car-test-service';


describe('Test suite of function that manipulate objects by function with interface ICar', () => {

    let electricTestCar: ElectricCar;
    before(() => {
        electricTestCar = new ElectricCar(
            'Electric Car',
            'Porsche Taycan',
            'Red',
            90
        );

    });

    it('Test: testCat function call starEngine method form interface ICar', () => {
        testCar(electricTestCar);
        expect(electricTestCar.stateOfEngine).to.true;

    });

    it('Test: testCat function call drive method form interface ICar', () => {
        electricTestCar.batteryCapacity = 90;
        testCar(electricTestCar);
        expect(electricTestCar.batteryCapacity).to.equal(85);

    });

});
