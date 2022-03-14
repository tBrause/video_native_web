/**
 *
 * http-Modul laden
 *
 */
const http = require("http");

/**
 *
 * Einen Server mit commonjs erstellen
 *
 */
const server = http.createServer(function (req, res) {
  // response header
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  // response
  res.write(`commonjs`);

  // response beenden (sonst endlos)
  res.end();
});

// Server starten und Callback
server.listen(`3000`, function () {
  console.log(`commonjs`);
});

/**
 *
 * Einen Server mit ECMA-Script erstellen
 *
 */

// const server = http.createServer((req, res) => {
// server.listen(`3000`, () => {
