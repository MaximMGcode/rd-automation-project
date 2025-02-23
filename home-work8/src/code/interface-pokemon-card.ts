
//  https://docs.pokemontcg.io/api-reference/cards/get-card

export interface PokemonCard {
    data: {
        id: string;
        name: string;
        supertype: string;
        subtypes: string[];
        hp: string;
        types: string[];
        evolvesTo: string[];
        rules: string[];
        attacks: {
            name: string;
            cost: string[];
            convertedEnergyCost: number;
            damage: string;
            text: string;
        }
        weaknesses: unknown[];
        retreatCost: unknown[];
        convertedRetreatCost: unknown[];
        set: unknown[];
        number: unknown;
        artist: unknown;
        rarity: unknown;
        nationalPokedexNumbers: unknown[];
        legalities: unknown;
        images: unknown
        tcgplayer: unknown
    };
}
