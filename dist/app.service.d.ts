import { DbService } from './shared';
export declare class AppService {
    private readonly db;
    constructor(db: DbService);
    getHello(): Promise<void>;
    fileread(): Promise<any>;
    createuser(name: string): Promise<any>;
    updateuser(id: string, name: string, token: string): Promise<any>;
    getbyid(id: string): Promise<any>;
}
