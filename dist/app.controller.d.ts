import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Promise<string>;
    readfile(): Promise<any>;
    createFile(name: string): Promise<any>;
    updateFile(id: string, name: string, token: string): Promise<any>;
    getbyid(id: string): Promise<any>;
    getdeltoken(symbol: string): Promise<void>;
    getdelid(id: string): Promise<void>;
}
