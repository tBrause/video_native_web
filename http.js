/**
 *
 * http-Modul laden
 *
 */
const http = require("http");

/**
 *
 * Einen Server erstellen mit commonjs
 *
 */
const server = http.createServer(function (req, res) {
  // response
  res.write(`commonjs`);

  // response beenden (sonst endlos)
  res.end();
});

// Server starten und Callback
server.listen(`3000`, () => {
  console.log(`commonjs`);
});

/**
 *
 * Einen Server erstellen mit ECMA-Script
 *
 */
const serverECMA = http.createServer((req, res) => {
  // response
  res.write(`ECMA-Script`);

  // response beenden (sonst endlos)
  res.end();
});

// Server starten und Callback
serverECMA.listen(`3001`, () => {
  console.log(`ECMA-Script`);
});
