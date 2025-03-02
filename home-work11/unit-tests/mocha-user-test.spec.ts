import sinon from 'ts-sinon';
import {expect} from 'chai';
import { User } from '../src/modules/user';
import { Auth} from '../src/modules/auth';
import { beforeEach, describe } from 'mocha';


describe('Test: User class', () => {
    let userInstance: User;
    const mokeString = 'User John logged in. with token NArW6AQXgvkkdyDiNSr';

    beforeEach(() => {
        const authInstance = new Auth();
        userInstance = new User(authInstance);
    });
    it('Test: login method return data', () => {
        const stubUserInstance = sinon.stub(userInstance);

        stubUserInstance.login.returns(mokeString);
        expect(userInstance.login()).to.be.equal(mokeString);

    });
    it('Test: check method trackAction call when use logout and logout method', () => {
        const stubUserInstance = sinon.spy(userInstance);

        stubUserInstance.logout();
        stubUserInstance.login();
        expect(stubUserInstance.trackAction.calledTwice).to.be.true;

    });
    it('Test: check that trackAction call with login and logout argument', () => {
        const stubUserInstance = sinon.spy(userInstance);

        stubUserInstance.login();
        expect(stubUserInstance.trackAction.calledWith('login')).to.be.true;
        stubUserInstance.logout();
        expect(stubUserInstance.trackAction.calledWith('logout')).to.be.true;
    });
});
