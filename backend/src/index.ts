import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { petRoute } from "./routes/petRoute";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/pet", petRoute);

export default app;
