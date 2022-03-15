/**
 *
 * http-Modul laden
 *
 */
const http = require("http");

/**
 *
 * Server erstellen
 *
 */
const server = http.createServer((req, res) => {
  // response header
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  // response
  res.write(`hello world ${req.method} ${req.url}`);

  // response beenden (sonst endlos)
  res.end();
});

/**
 *
 * Server starten und Callback
 *
 */
server.listen(`3000`, () => {
  console.log(`hello world`);
});
