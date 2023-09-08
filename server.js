const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const respuesta = {
    nombre: 'Abner Jimenez',
    areasDeConocimiento: ['HTML', 'CSS', 'JavaScript'],
    hobbies: ['Gym', 'Estudiar']
  };
  res.end(JSON.stringify(respuesta));
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});