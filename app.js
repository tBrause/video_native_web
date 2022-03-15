/**
 *
 * Module laden
 *
 */
// API Modul
const http = require("http");

// Externes Modul
const express = require("express");

// Eigenes Modul
//const handle = require("./server/handle");

/**
 *
 * APP mit Express
 *
 */
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

/**
 *
 * Server erstellen
 *
 */
const server = http.createServer(app);

/**
 *
 * Server starten und Callback
 *
 */
server.listen("3002", () => {
  console.log(`Server on 3002`);
});
