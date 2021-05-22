"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDatabase = void 0;
const knex_1 = __importDefault(require("knex"));
class BaseDatabase {
    constructor() {
        this.tableNames = {
            petshop: "Petshop"
        };
    }
    getConnection() {
        if (!BaseDatabase.connection) {
            BaseDatabase.connection = knex_1.default({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: Number(process.env.PORT) || 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                },
            });
        }
        return BaseDatabase.connection;
    }
    ;
    static destroyConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (BaseDatabase.connection) {
                yield BaseDatabase.connection.destroy();
                BaseDatabase.connection = null;
            }
        });
    }
    ;
}
exports.BaseDatabase = BaseDatabase;
BaseDatabase.connection = null;
;
