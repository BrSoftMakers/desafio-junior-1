"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cloudinary_1 = require("cloudinary");
var cors_1 = __importDefault(require("cors"));
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var mongoose_1 = __importDefault(require("mongoose"));
var path_1 = __importDefault(require("path"));
var pets_routes_1 = require("./routes/pets.routes");
dotenv.config({ path: path_1.default.join(__dirname, ".env") });
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
mongoose_1.default.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0.blzev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
var app = express_1.default();
var PORT = process.env.PORT || 3333;
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "views"));
app.use(cors_1.default());
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(express_fileupload_1.default({ useTempFiles: true }));
app.use("/pets", pets_routes_1.petsRouter);
app.get("/", function (req, res) { return res.redirect("/pets"); });
app.listen(PORT, function () { return console.log("Servidor está online!!"); });
