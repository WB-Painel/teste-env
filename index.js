import { createRequire } from "module";

import { saldo } from "./saldo.mjs";

import { getEmoji } from "./slot.mjs";

import { Verify } from "./SlotVerify.mjs";

const require = createRequire(import.meta.url);

require("dotenv").config();

const express = require("express");
const app = express();

const Parse = require('parse/node');

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

const databaseUrl = `mysql://${dbUser}:${dbPassword}/${dbHost}:${dbPort}/${dbName}`;

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Authorization");
    next();
})


app.get("/parse", function (req, res) {
    Parse.initialize("jBtz9Iq2d3y5VVnqEFwtgVjVURilGwXpRojcK0Kr", "jUPkkL1lzG4LDhyXAxAooB8ITVE6xro2b9CSylrc");
Parse.serverURL = 'https://teste-env-369aa8701d2e.herokuapp.com/parse'

    const GameScore = Parse.Object.extend("GameScore");
const gameScore = new GameScore();

gameScore.set("cheatMode", true);

gameScore.save()
.then((gameScore) => {
  // Execute any logic that should take place after the object is saved.
  //alert('New object created with objectId: ' + gameScore.id);
    console.log(""+gameScore.id);
    res.send("A");
}, (error) => {
  // Execute any logic that should take place if the save fails.
  // error is a Parse.Error with an error code and message.
 // alert('Failed to create new object, with error code: ' + error.message);
    console.log(""+error.message);
    res.send("B"+error.message);
});
    
   // res.send("Olá, Biel! " + databaseUrl);
    
});

app.post("/Slot", function (req, res) {
//console.log('Valor postado', req.body.NoModoTurbo);
let ListEmoji = getEmoji(req.body.NoModoTurbo);

Verify(ListEmoji);
//console.log("",ListEmoji);
    
res.send(""+ListEmoji);
});

app.get("/Verify",function (req, res) {


});

app.post("/K", (req, res) => {
  const { parcel } = req.body;
  if (!parcel) {
    return res.status(400).send({status: "failed"});
  }
  res.status(200).send({status: "recieved"});
});

app.listen(port, () => {
    console.info("Aplicação rodando em http://localhost:3000");
});
