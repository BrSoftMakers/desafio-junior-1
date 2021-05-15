import { v2 as cloudinary } from "cloudinary";
import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import fileupload from "express-fileupload";
import mongoose from "mongoose";
import path from "path";

import { petsRouter } from "./routes/pets.routes";

dotenv.config({ path: path.join(__dirname, ".env") });

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.blzev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

const app = express();
const PORT = process.env.PORT || 3333;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileupload({ useTempFiles: true }));
app.use("/pets", petsRouter);

app.get("/", (req, res) => res.redirect("/pets"));

app.listen(PORT, () => console.log("Servidor está online!!"));
