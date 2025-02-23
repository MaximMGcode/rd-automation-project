import { ElectricCar } from './electric-car';
import { DieselCar } from './diesel-car';
import { testCar, testElectricCar } from './car-test-service';


const electricPorsche = new ElectricCar(
    'Electric Car',
    'Porsche Taycan',
    'Red',
    85
);

const dieselPorsche = new DieselCar(
    'Diesel Car',
    'Porsche Cayenne Diesel',
    'Black',
    60
);


testCar(dieselPorsche);
testCar(electricPorsche);
testElectricCar(electricPorsche, 50);
