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
exports.TipoAnimal = exports.AnimalEstimacao = void 0;
const core_1 = require("@mikro-orm/core");
const type_graphql_1 = require("type-graphql");
let AnimalEstimacao = class AnimalEstimacao {
    constructor() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    core_1.PrimaryKey(),
    __metadata("design:type", Number)
], AnimalEstimacao.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property(),
    __metadata("design:type", String)
], AnimalEstimacao.prototype, "nome", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    core_1.Property(),
    __metadata("design:type", Number)
], AnimalEstimacao.prototype, "idade", void 0);
__decorate([
    type_graphql_1.Field(() => TipoAnimal),
    core_1.Enum(),
    __metadata("design:type", Number)
], AnimalEstimacao.prototype, "tipo", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property(),
    __metadata("design:type", String)
], AnimalEstimacao.prototype, "raca", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property(),
    __metadata("design:type", String)
], AnimalEstimacao.prototype, "nomeDono", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property(),
    __metadata("design:type", String)
], AnimalEstimacao.prototype, "telefoneDono", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property({ type: 'date' }),
    __metadata("design:type", Object)
], AnimalEstimacao.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    core_1.Property({ type: 'date', onUpdate: () => new Date() }),
    __metadata("design:type", Object)
], AnimalEstimacao.prototype, "updatedAt", void 0);
AnimalEstimacao = __decorate([
    type_graphql_1.ObjectType(),
    core_1.Entity()
], AnimalEstimacao);
exports.AnimalEstimacao = AnimalEstimacao;
var TipoAnimal;
(function (TipoAnimal) {
    TipoAnimal[TipoAnimal["GATO"] = 0] = "GATO";
    TipoAnimal[TipoAnimal["CACHORRO"] = 1] = "CACHORRO";
})(TipoAnimal = exports.TipoAnimal || (exports.TipoAnimal = {}));
type_graphql_1.registerEnumType(TipoAnimal, {
    name: "TipoAnimal",
});
//# sourceMappingURL=AnimalEstimacao.js.map