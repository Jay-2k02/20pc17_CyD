"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const shared_1 = require("./shared");
let AppService = class AppService {
    constructor(db) {
        this.db = db;
    }
    async getHello() {
    }
    async fileread() {
        const file = await this.db.readAll();
        return file;
    }
    async createuser(name) {
        console.log(name);
        const user = await this.db.create(name, []);
        return user;
    }
    async updateuser(id, name, token) {
        const u_user = await this.db.update(id, name, token);
        return u_user;
    }
    async getbyid(id) {
        const usersbyid = await this.db.find(id);
        return usersbyid;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shared_1.DbService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map