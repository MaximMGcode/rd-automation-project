export interface IApiInterface {
    get(url: string): Promise<Response>
};
