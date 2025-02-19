import { PokemonCard } from './interface-pokemon-card';
import { getPokeCard } from './get-pokemon-card';


class Pokemon {

    public nameOfPokemon: string;
    public nextLevelAfterEvolve: string;
    public healthReserve: string;

    public constructor(pokemonInfo: PokemonCard) {
        this.nameOfPokemon = pokemonInfo.data.name;
        this.nextLevelAfterEvolve = pokemonInfo.data.evolvesTo[0];
        this.healthReserve = pokemonInfo.data.hp;
    }

    public getPokemonInfo(): void {
        const fullInfo = (
            `This is pokemon name ${this.nameOfPokemon} ` +
            `with start HP ${this.healthReserve}\n` +
            `after get some EXP pokemon will bee new shape ${this.nextLevelAfterEvolve}`
        );
        console.log(fullInfo);
    }
}


const apiUrl = 'https://api.pokemontcg.io/v2/cards/xy1-1';

(async () => {
    const cardData = await getPokeCard(apiUrl);
    const newPokemon = new Pokemon(cardData);
    newPokemon.getPokemonInfo();
})();
