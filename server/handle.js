const handle = function (req, res) {
  console.log("Modul laden");
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });
  res.write(`hello world ${req.method} ${req.url}`);
  res.end();
};

module.exports = handle;
