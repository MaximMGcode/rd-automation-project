
import { getPokeCard } from './get-pokemon-card';
import { PokemonCard } from './interface-pokemon-card';
import { Calculator } from './calculator';
import { Pokemon } from './pokemon';
import { ElectricPorsche } from './abstraction';


const apiUrl2 = 'https://api.pokemontcg.io/v2/cards/xy1-1';

(async () => {
    const cardData2 = await getPokeCard(apiUrl2);
    const newPokemon = new Pokemon(cardData2);
    newPokemon.getPokemonInfo();
})();


const apiUrl1 = 'https://api.pokemontcg.io/v2/cards/xy1-1';
let cardData1: PokemonCard | null = null;

(async () => {
    cardData1 = await getPokeCard(apiUrl1);
    console.log(cardData1.data.name);
    console.log(cardData1.data.id);
    console.log(cardData1.data.evolvesTo[0]);
})();

const porsche = new ElectricPorsche(260, 'medium sedan', 'Electric 250 kW');
porsche.startEngine();
porsche.pickUpSpeed(40);
porsche.StopEngine();
porsche.showCarInfo();


const calc = new Calculator(10, 5);
calc.addition();  // 10 + 5 = 15
calc.minus();     // 10 - 5 = 5
calc.multiply();  // 10 * 5 = 50
calc.divide();    // 10 / 5 = 2
