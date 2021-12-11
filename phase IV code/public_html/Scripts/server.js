// server.js

const express = require("express");
const server = express();

const body_parser = require("body-parser");

// parse JSON (application/json content-type)
server.use(body_parser.json());

const port = 3711;

// << db setup >>
const db = require("./db");
const dbName = "data";
const collectionName = "movies";

// << db init >>

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});
