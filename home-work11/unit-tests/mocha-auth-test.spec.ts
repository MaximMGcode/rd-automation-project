import sinon from 'ts-sinon';
import { StubbedInstance } from 'ts-sinon';
import { expect } from 'chai';
import { User } from '../src/modules/user';
import { Auth } from '../src/modules/auth';
import { Token } from '../src/modules/token-interface';
import { describe } from 'mocha';


describe('Test: Auth class methods using in User class', () => {
    let mockedAuth: StubbedInstance<Auth>;
    const testDataToken = {
        tokenCode: 'QFm1aBedQdhb8A47i8I',
        expiredDate: '2025.03.02 22.49.35'
    } as Token;

    beforeEach(() => {
        mockedAuth = sinon.createStubInstance(Auth) as unknown as StubbedInstance<Auth>;
        mockedAuth.generateToken.returns(testDataToken);
    });

    it('Test: check method generateToken called inside login method', () => {
        const user = new User(mockedAuth);
        user.login();
        expect(mockedAuth.generateToken.called).to.be.true;
    });
    it('Test: check method generateToken didn\'t called inside logout method', () => {
        const user = new User(mockedAuth);
        user.logout();
        expect(mockedAuth.generateToken.notCalled).to.be.true;
    });
    it('Test: check method generateToken return token data in login method', () => {
        const user = new User(mockedAuth);
        user.login();
        expect(mockedAuth.generateToken.returnValues[0]).to.deep.equal(testDataToken);
    });
});
