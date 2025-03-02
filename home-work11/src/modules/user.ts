import { Auth } from './auth';

export class User {
    private auth: Auth;
    private actionsCount: Record<string, number> = {};

    public username: string;
    public password: string;

    public constructor(
        auth: Auth,
        username: string = 'Guest' as string,
        password: string = 'Guest' as string
    ) {
        this.auth = auth;
        this.username = username;
        this.password = password;
    }

    public login(): string {
        this.trackAction('login');
        return `User ${this.getUsername()} logged in. with token ${this.auth.getAuthData()}`;
    }

    public  logout(): string {
        this.trackAction('logout');
        return `User ${this.getUsername()} logged out.`;
    }

    public trackAction(action: string): void {
        if (!(action === 'logout')) {
            this.auth.generateToken();
            console.log(this.auth.generateToken());
        }
        this.actionsCount[action] = (this.actionsCount[action] || 0) + 1;
    }

    public getActionsCount(action: string): number {
        return this.actionsCount[action] || 0;
    }

    public getUsername(): string {
        return this.username;
    }
}
