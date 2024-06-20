import express from "express";
import dotenv from "dotenv";
import { testConnection } from "./database/db.js";
import router from "./routes/notes.route.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(process.env.APP_PORT || 3000, () => {
    testConnection();
    console.log(`http://localhost:${process.env.APP_PORT || 3000}`);
});