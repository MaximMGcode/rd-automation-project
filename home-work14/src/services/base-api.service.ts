import { IApiInterface } from '../interfaces/base-api-interface';

export class BaseApiObject implements IApiInterface {
    public baseUrl: string;

    public constructor (baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public async get(
        endPointResource: string, params?: Record<string, string | number | boolean>
    ): Promise<Response> {

        const defaultHeaders = {
            ...{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        const queries = params ? `?${Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')}` : '';
        return fetch(`${this.baseUrl}${endPointResource}${queries}`, {
            method: 'GET',
            headers: defaultHeaders
        });
    }
}
