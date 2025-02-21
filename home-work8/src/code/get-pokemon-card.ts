import { PokemonCard } from './interface-pokemon-card';


export async function getPokeCard(apiUrl: string): Promise<PokemonCard> {
    const response = await fetch(apiUrl);
    const pokemonCardData = await response.json() as PokemonCard;
    return pokemonCardData;
}
