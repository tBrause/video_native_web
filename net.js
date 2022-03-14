/**
 *
 * net-Modul laden
 *
 */
const net = require("net");

/**
 *
 * Einen Server erstellen
 *
 */
const server = net.createServer((socket) => {
  socket.write(`hello TCP/IP`);
  socket.end();
});

/**
 *
 * Server starten und Callback
 *
 */
server.listen(`3000`, () => {
  //console.log(`hello world`);
});
