import { createRequire } from "module";

import { saldo } from "./saldo.mjs";

import { getEmoji } from "./slot.mjs";

const require = createRequire(import.meta.url);

require("dotenv").config();

const express = require("express");
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

app.get("/Slot", function (req, res) {
    console.log(""+req);
res.send(""+getEmoji());
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});
