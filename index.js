import { createRequire } from "module";

createRequire("dotenv").config();

import { saldo } from "./saldo.mjs";

const express = createRequire("express");
const app = express();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const databaseUrl = `mysql://${dbUser}:${dbPassword}/${dbHost}:${dbPort}/${dbName}`;

const port = process.env.PORT || 3000;

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Authorization");
    next();
})

app.get("/", function (req, res) {
    res.send("Olá, Biel! " + databaseUrl);
});

app.get("/A", function (req, res) {
    res.send("Retorno"+saldo);
    console.log("AAAAAAAAAA");
});

app.get("/B", function (req, res) {
    res.send("B");
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});
