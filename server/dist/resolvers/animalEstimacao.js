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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalEstimacaoResolver = void 0;
const type_graphql_1 = require("type-graphql");
const AnimalEstimacao_1 = require("../entities/AnimalEstimacao");
let AnimalEstimacaoResolver = class AnimalEstimacaoResolver {
    animais({ em }) {
        return em.find(AnimalEstimacao_1.AnimalEstimacao, {});
    }
    animal(id, { em }) {
        return em.findOne(AnimalEstimacao_1.AnimalEstimacao, { id });
    }
    createAnimal(nome, idade, tipo, raca, nomeDono, telefoneDono, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const animalEstimacao = em.create(AnimalEstimacao_1.AnimalEstimacao, {
                nome,
                idade,
                tipo,
                raca,
                nomeDono,
                telefoneDono
            });
            yield em.persistAndFlush(animalEstimacao);
            return animalEstimacao;
        });
    }
    updateAnimal(id, nome, idade, tipo, raca, nomeDono, telefoneDono, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            const animalEstimacao = yield em.getRepository(AnimalEstimacao_1.AnimalEstimacao).findOne({ id });
            if (!animalEstimacao) {
                return null;
            }
            animalEstimacao.nome = nome;
            animalEstimacao.idade = idade;
            animalEstimacao.tipo = tipo;
            animalEstimacao.raca = raca;
            animalEstimacao.nomeDono = nomeDono;
            animalEstimacao.telefoneDono = telefoneDono;
            yield em.persistAndFlush(animalEstimacao);
            return animalEstimacao;
        });
    }
    deleteAnimal(id, { em }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield em.nativeDelete(AnimalEstimacao_1.AnimalEstimacao, { id });
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [AnimalEstimacao_1.AnimalEstimacao]),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AnimalEstimacaoResolver.prototype, "animais", null);
__decorate([
    type_graphql_1.Query(() => AnimalEstimacao_1.AnimalEstimacao, { nullable: true }),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AnimalEstimacaoResolver.prototype, "animal", null);
__decorate([
    type_graphql_1.Mutation(() => AnimalEstimacao_1.AnimalEstimacao),
    __param(0, type_graphql_1.Arg('nome', () => String)),
    __param(1, type_graphql_1.Arg('idade', () => type_graphql_1.Int)),
    __param(2, type_graphql_1.Arg('tipo', () => AnimalEstimacao_1.TipoAnimal)),
    __param(3, type_graphql_1.Arg('raca', () => String)),
    __param(4, type_graphql_1.Arg('nomeDono', () => String)),
    __param(5, type_graphql_1.Arg('telefoneDono', () => String)),
    __param(6, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AnimalEstimacaoResolver.prototype, "createAnimal", null);
__decorate([
    type_graphql_1.Mutation(() => AnimalEstimacao_1.AnimalEstimacao, { nullable: true }),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Arg('nome', () => String)),
    __param(2, type_graphql_1.Arg('idade', () => type_graphql_1.Int)),
    __param(3, type_graphql_1.Arg('tipo', () => AnimalEstimacao_1.TipoAnimal)),
    __param(4, type_graphql_1.Arg('raca', () => String)),
    __param(5, type_graphql_1.Arg('nomeDono', () => String)),
    __param(6, type_graphql_1.Arg('telefoneDono', () => String)),
    __param(7, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Number, String, String, String, Object]),
    __metadata("design:returntype", Promise)
], AnimalEstimacaoResolver.prototype, "updateAnimal", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('id', () => type_graphql_1.Int)),
    __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AnimalEstimacaoResolver.prototype, "deleteAnimal", null);
AnimalEstimacaoResolver = __decorate([
    type_graphql_1.Resolver()
], AnimalEstimacaoResolver);
exports.AnimalEstimacaoResolver = AnimalEstimacaoResolver;
//# sourceMappingURL=animalEstimacao.js.map