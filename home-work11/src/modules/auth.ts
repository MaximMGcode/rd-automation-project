import { Token } from './token-interface';
import { generateRandomString, getFormattedDate} from './token-service';

export class Auth {
    private authData: Token | null;

    public constructor() {
        this.authData = null;
    }

    public generateToken(): Token {
        this.authData = {
            tokenCode: generateRandomString(19),
            expiredDate: getFormattedDate()
        };
        return this.authData;
    }

    public getAuthData(): Token | null {
        return this.authData;
    }
}
