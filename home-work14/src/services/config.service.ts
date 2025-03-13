import * as dotenv from 'dotenv-safe';
import { ITheJokesApiConfigDto } from '../joke-dto/config.dto';

export class ConfigService {

    public constructor() {
        dotenv.config();
    }
    public getJokeApi(): ITheJokesApiConfigDto {
        return {baseUrl: 'https://official-joke-api.appspot.com/'};
    }
}
