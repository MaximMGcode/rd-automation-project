import { expect } from 'chai';
import { ConfigService } from '../src/services/config.service';
import { BaseApiObject } from '../src/services/base-api.service';
import { JokeApi } from '../src/joke-api/joke.api';

describe('Test suite of joke-api', () => {
    const configService = new ConfigService();
    const configProd = configService.getJokeApi();
    const baseApiService = new BaseApiObject(configProd.baseUrl);
    const jokeApiGeneral = new JokeApi(baseApiService);

    it('Test (getRandomJoke): Check that random joke has correct structure and status code 200', async () => {
        const response = await jokeApiGeneral.getRandomJoke();
        const responseData = response[1];

        expect(response[0].status).to.equal(200);
        expect(responseData).to.have.property('type').that.is.a('string');
        expect(responseData).to.have.property('setup').that.is.a('string');
        expect(responseData).to.have.property('punchline').that.is.a('string');
        expect(responseData).to.have.property('id').that.is.a('number');

        const allowedTypes = ['general', 'knock-knock', 'programming', 'dad'];
        expect(allowedTypes).to.include(responseData.type);
    });

    it('Test (getJokeTypes): Check that all joke statuses are correct', async () => {
        const response = await jokeApiGeneral.getJokeTypes();
        const statusesOfJoke = response[1];
        const expectedStatuses = ['general', 'knock-knock', 'programming', 'dad'];

        expect(Array.isArray(statusesOfJoke)).to.be.true;
        expect(statusesOfJoke).to.have.members(expectedStatuses);
    });

    it('Test (getJokeTypes): Check that joke has only four statuses', async () => {
        const response = await jokeApiGeneral.getJokeTypes();
        const statusesOfJoke = response[1];

        expect(Array.isArray(statusesOfJoke)).to.be.true;
        expect(statusesOfJoke.length).to.equal(4);
    });

    it('Test (getTenRandomJokes): should return 10 jokes', async () => {
        const response = await jokeApiGeneral.getTenRandomJokes();
        const countOfJokes = (response[1] as unknown as object[]).length;

        expect(countOfJokes).to.equal(10);
    });

    it('Test (getRandomJokesWithCountLimit): should return limit with 5 jokes', async () => {
        const response = await jokeApiGeneral.getRandomJokesWithCountLimit(5);
        const countOfJokes = (response[1] as unknown as object[]).length;

        expect(countOfJokes).to.equal(5);
    });
    it('Test (getRandomJokesByType): should return joke with programming type ', async () => {
        const response = await jokeApiGeneral.getRandomJokesByType('programming');
        const joke = response[1][0];

        expect(joke.type).to.equal('programming');
    });
});
