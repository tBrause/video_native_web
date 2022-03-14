/**
 *
 * Funktion nach einer Sekunde ausführen
 * Es wird aber nur die Funktion zeitverzögert ausgeführt
 *
 */
setTimeout(function () {
  console.log(`world`);
}, 1000);

/**
 *
 * Deshalb ist hier das Ergebnis : hello (+1 sek) world
 * und nicht nach 1 Sekunde: world hello
 *
 */
console.log(`hello`);

// ECMA-Script Schreibweise
setTimeout(() => {
  console.log(`worlds`);
}, 2000);
