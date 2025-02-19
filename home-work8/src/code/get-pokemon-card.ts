import { PokemonCard } from './interface-pokemon-card';


export async function getPokeCard(apiUrl: string): Promise<PokemonCard> {
    const response = await fetch(apiUrl);
    const pokemonCardData = await response.json() as PokemonCard;
    return pokemonCardData;
}


if (require.main === module) {

    const apiUrl = 'https://api.pokemontcg.io/v2/cards/xy1-1';
    let cardData: PokemonCard | null = null;

    (async () => {
        cardData = await getPokeCard(apiUrl);
        console.log(cardData.data.name);
        console.log(cardData.data.id);
        console.log(cardData.data.evolvesTo[0]);
    })();

}
