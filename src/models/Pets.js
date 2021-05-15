"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var petsSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    animal: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    contactOwner: {
        type: String,
        required: true,
    },
});
var Pets = mongoose_1.default.model("pets", petsSchema);
exports.default = Pets;
