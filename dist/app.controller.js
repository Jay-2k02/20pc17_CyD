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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getHello() {
        return "Hello";
    }
    async readfile() {
        return this.appService.fileread();
    }
    async createFile(name) {
        console.log(name);
        return this.appService.createuser(name);
    }
    async updateFile(id, name, token) {
        return this.appService.updateuser(id, name, token);
    }
    async getbyid(id) {
        return this.appService.getbyid(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/readfile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "readfile", null);
__decorate([
    (0, common_1.Post)('/createuser'),
    __param(0, (0, decorators_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createFile", null);
__decorate([
    (0, common_1.Post)('/updateuser'),
    __param(0, (0, decorators_1.Body)('id')),
    __param(1, (0, decorators_1.Body)('name')),
    __param(2, (0, decorators_1.Body)('Symbol')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateFile", null);
__decorate([
    (0, common_1.Get)('getbyid'),
    __param(0, (0, decorators_1.Body)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getbyid", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map