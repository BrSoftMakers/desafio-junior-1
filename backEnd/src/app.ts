import express from "express";
import cors from "cors";
import router from "./routes/pet.router";
import routerUser from "./routes/user.router";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use("/" , routerUser)





export default app;