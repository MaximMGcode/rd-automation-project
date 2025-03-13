import { expect } from 'chai';
import * as path from 'path';
import { PactV3, MatchersV3, Verifier } from '@pact-foundation/pact';
import { UserService } from '../src/services/user-service';
import { IUserDto } from '../src/modules/user.dto';


describe('PactV3 UserStore consumer tests', () => {
    let userStoreService: UserService;

    const provider = new PactV3({
        consumer: 'Users-Web-v3',
        provider: 'Users-API-v3'
    });
    const userExample: Required<IUserDto> = {
        code: 200,
        type: 'unknown',
        message: '9223372036854772964'
    } as unknown as IUserDto;

    const expectedBody = MatchersV3.like(userExample);

    describe('reate and then login a user', () => {
        it('Test: returns the created user and login message', () => {
            provider
                .given('user interaction')
                .uponReceiving('create a user')
                .withRequest({
                    method: 'POST',
                    path: '/v2/user',
                    body: expectedBody,
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    }
                })
                .willRespondWith({
                    status: 200,
                    headers: { 'content-type': 'application/json' },
                    body: expectedBody
                });
            return provider.executeTest(async (mockserver) => {
                userStoreService = new UserService(mockserver.url);
                const responseCreate = await userStoreService.createUser(userExample);
                expect(responseCreate.data).to.deep.eq(userExample);

            });
        });
    });
});

describe('PactV3 UserStore Provider Verification', () => {
    it('Test: validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/Users-Web-v3-Users-API-v3.json')]
        })
            .verifyProvider()
            .then(() => {
                console.log('Pact Verification Complete!');
            });
    });
});
