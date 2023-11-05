import { createRequire } from "module";

import { saldo } from "./saldo.mjs";

import { getEmoji } from "./slot.mjs";

import { Verify } from "./SlotVerify.mjs";

import { VSOSDUEOMDS } from "./SlotVerify.mjs";

import Parse from 'parse/node.js';


const require = createRequire(import.meta.url);

require("dotenv").config();

const express = require("express");

const app = express();

//const dbHost = process.env.DB_HOST;
//const dbPort = process.env.DB_PORT;
//const dbName = process.env.DB_NAME;
//const dbUser = process.env.DB_USER;
//const dbPassword = process.env.DB_PASSWORD;

//const databaseUrl = `mysql://${dbUser}:${dbPassword}/${dbHost}:${dbPort}/${dbName}`;

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true})); 



app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Authorization");
    next();
})

Parse.initialize("jBtz9Iq2d3y5VVnqEFwtgVjVURilGwXpRojcK0Kr","1SIpvCODXvK6MrKkJFR5F0WedOly3gG5hfLxXosI"/*"1SIpvCODXvK6MrKkJFR5F0WedOly3gG5hfLxXosI"*/);
//Parse.serverURL = 'https://teste-env-369aa8701d2e.herokuapp.com/parse'
Parse.serverURL = 'https://parseapi.back4app.com/';

app.post('/users/register', async(req, res) => {
    console.log(req.body);

    let VP = req.body;
    let UN = VP.UserName;
    let EM = VP.Email;
    let PW = VP.Password;
  
    let user = new Parse.User();
    user.set("username", UN);
    user.set("email", EM);
    user.set("password", PW);

  try{
  await user.signUp();
      
  console.log("Sim");

  res.send("Sucesso");
      
  } catch (error) {

  console.log("Não");

  res.send("Erro");
  
  }
});

app.get("/parse", function (req, res) {
    
    //const GameScore = Parse.Object.extend("GameScore");

    new Parse.Installation();
    
    res.send("Olá, Biel! ");
    
});

app.post("/Slot", function (req, res) {
//console.log('Valor postado', req.body.NoModoTurbo);
let Information = req.body;
    
let ListEmoji = getEmoji(req.body.NoModoTurbo);

Verify(ListEmoji, Information, Parse);
//console.log("",ListEmoji);
    
res.send(""+ListEmoji);
});

app.post("/Verify",function (req, res) {

let Information = req.body;

VSOSDUEOMDS(Parse,Information,res);

//res.send(""+V);

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
