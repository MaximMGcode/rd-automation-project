import axios, { AxiosPromise } from 'axios';
import { IUserDto } from '../modules/user.dto';

export class UserService {

    public constructor(private url: string) {}

    public createUser = (user: IUserDto): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/user',
            data: user
        });
    };
}
