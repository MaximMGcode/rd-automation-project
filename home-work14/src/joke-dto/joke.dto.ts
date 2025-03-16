export interface IJoke {
    type: string;
    setup: string;
    punchline: string;
    id: number;
};

export interface IJokesResponse {
    jokes: IJoke[];
};

export type JokeCategory = 'general' | 'knock-knock' | 'programming' | 'dad';
