export declare class DbService {
    private WatchLists;
    constructor();
    find(key: string): Promise<any>;
    readAll(): Promise<any>;
    create(name: string, data: Array<string>): Promise<any>;
    update(key: string, name: string, token: string): Promise<any>;
}
