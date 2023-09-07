const http = require("http");
const chalk = require("chalk");

const host = "localhost";
const port = 8000; // Puedes cambiar a 8080 si prefieres ese puerto

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const response = {
    nombre: "David",
    mensaje: "Holiii, cómo estás? :D",
  };
  res.end(JSON.stringify(response));
});

server.listen(port, host, () => {
  const mensaje = `Servidor escuchando en http://${host}:${port}`;
  console.log(chalk.green(mensaje));
});
