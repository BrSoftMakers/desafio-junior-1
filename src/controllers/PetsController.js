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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary_1 = require("cloudinary");
var Pets_1 = __importDefault(require("../models/Pets"));
var PetsController = /** @class */ (function () {
    function PetsController() {
    }
    PetsController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pets, cachorros, gatos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Pets_1.default.find()];
                    case 1:
                        pets = _a.sent();
                        cachorros = pets.filter(function (pet) { return pet.animal === "Cachorro"; });
                        gatos = pets.filter(function (pet) { return pet.animal === "Gato"; });
                        res.render("pages/index.ejs", { pets: pets });
                        return [2 /*return*/];
                }
            });
        });
    };
    PetsController.prototype.indexDog = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pets, cachorros;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Pets_1.default.find()];
                    case 1:
                        pets = _a.sent();
                        cachorros = pets.filter(function (pet) { return pet.animal === "Cachorro"; });
                        res.render("pages/index.ejs", { pets: cachorros });
                        return [2 /*return*/];
                }
            });
        });
    };
    PetsController.prototype.indexCat = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pets, gatos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Pets_1.default.find()];
                    case 1:
                        pets = _a.sent();
                        gatos = pets.filter(function (pet) { return pet.animal === "Gato"; });
                        res.render("pages/index.ejs", { pets: gatos });
                        return [2 /*return*/];
                }
            });
        });
    };
    PetsController.prototype.showCreate = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var pets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Pets_1.default.find()];
                    case 1:
                        pets = _a.sent();
                        res.render("pages/create.ejs", { pets: pets });
                        return [2 /*return*/];
                }
            });
        });
    };
    PetsController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var img_1, file, _a, name_1, age, animal, race, owner, contactOwner, pet, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        if (!req.files) return [3 /*break*/, 2];
                        file = req.files.file;
                        return [4 /*yield*/, cloudinary_1.v2.uploader.upload(file.tempFilePath, function (err, result) {
                                img_1 = result.url;
                            })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = req.body, name_1 = _a.name, age = _a.age, animal = _a.animal, race = _a.race, owner = _a.owner, contactOwner = _a.contactOwner;
                        pet = new Pets_1.default({
                            name: name_1,
                            age: age,
                            animal: animal,
                            race: race,
                            img: img_1,
                            owner: owner,
                            contactOwner: contactOwner,
                        });
                        pet.save(function (err) {
                            if (err)
                                return console.error(err);
                            return console.log("Document inserted sucessufully!");
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4:
                        res.send(201);
                        return [2 /*return*/];
                }
            });
        });
    };
    PetsController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Pets_1.default.deleteOne({ _id: req.params.id }, function (err) {
                            if (err)
                                return console.error(err);
                            return console.log("Document deleted sucessufully");
                        })];
                    case 1:
                        _a.sent();
                        res.redirect("/", 200);
                        return [2 /*return*/];
                }
            });
        });
    };
    PetsController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, img, update, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = { _id: req.params.id };
                        if (!req.files) return [3 /*break*/, 2];
                        file = req.files.file;
                        return [4 /*yield*/, cloudinary_1.v2.uploader.upload(file.tempFilePath, function (err, result) {
                                img = result.url;
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (img === undefined) {
                            update = {
                                name: req.body.name,
                                age: req.body.age,
                                animal: req.body.animal,
                                race: req.body.race,
                                owner: req.body.owner,
                                contactOwner: req.body.contactOwner,
                            };
                        }
                        else {
                            update = {
                                name: req.body.name,
                                age: req.body.age,
                                animal: req.body.animal,
                                race: req.body.race,
                                img: img,
                                owner: req.body.owner,
                                contactOwner: req.body.contactOwner,
                            };
                        }
                        return [4 /*yield*/, Pets_1.default.findOneAndUpdate(query, update)];
                    case 3:
                        _a.sent();
                        res.send(201);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PetsController;
}());
exports.default = new PetsController();
