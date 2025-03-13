import { IApiInterface } from '../interfaces/base-api-interface';
import { IJoke, JokeCategory, IJokesResponse } from '../joke-dto/joke.dto';

export class JokeApi {
    private baseApiService: IApiInterface;

    public constructor(baseApiService: IApiInterface) {
        this.baseApiService = baseApiService;
    }

    public async getRandomJoke(): Promise<[Response, IJoke]> {
        const response = await this.baseApiService.get('random_joke');
        const responseData = await response.json();
        return await [response as Response, responseData];
    }

    public async getJokeTypes(): Promise<[Response, JokeCategory]> {
        const response = await this.baseApiService.get('types');
        const responseData = await response.json();
        return await [response as Response, responseData];
    }

    public async getTenRandomJokes(): Promise<[Response, IJokesResponse]> {
        const response = await this.baseApiService.get('random_ten');
        const responseData = await response.json();
        return await [response as Response, responseData];
    }

    public async getRandomJokesWithCountLimit(countOfLimit: number): Promise<[Response, IJokesResponse | IJokesResponse]> {
        const response = await this.baseApiService.get('jokes/random/' + countOfLimit);
        const responseData = await response.json();
        return await [response as Response, responseData];
    }

    public async getRandomJokesByType(jokeType: string): Promise<[Response, IJoke[]]> {
        const response = await this.baseApiService.get(`jokes/${jokeType}/random`);
        const responseData = await response.json();
        return await [response as Response, responseData];
    }
}
