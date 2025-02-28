"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var typeorm_1 = require("typeorm");
var ContactoModel = /** @class */ (function (_super) {
    __extends(ContactoModel, _super);
    function ContactoModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn({ type: 'bigint', name: 'id_relacion_contacto' }),
        __metadata("design:type", Number)
    ], ContactoModel.prototype, "id_relacion_contacto", void 0);
    __decorate([
        typeorm_1.Column({ type: 'date', name: 'fecha_inicio' }),
        __metadata("design:type", Date)
    ], ContactoModel.prototype, "fecha_inicio", void 0);
    __decorate([
        typeorm_1.Column({ type: 'bigint' }),
        __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
    ], ContactoModel.prototype, "contacto", void 0);
    __decorate([
        typeorm_1.Column({ type: 'bigint', name: 'id_usuario' }),
        __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
    ], ContactoModel.prototype, "id_usuario", void 0);
    ContactoModel = __decorate([
        typeorm_1.Entity({
            name: 'contacto',
            synchronize: true
        })
    ], ContactoModel);
    return ContactoModel;
}(typeorm_1.BaseEntity));
exports.ContactoModel = ContactoModel;
//# sourceMappingURL=Contacto.js.map