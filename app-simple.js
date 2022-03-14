/**
 *
 * Module laden
 *
 */
// API Modul
const http = require("http");

// Eigenes Modul
const handle = require("./server/handle");

/**
 *
 * Server erstellen
 *
 */
const server = http.createServer(handle);

/**
 *
 * Server starten und Callback
 *
 */
server.listen("3002", () => {
  console.log(`Server on 3002`);
});
