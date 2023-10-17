import { createServer } from 'node:http';

createServer((request, response) => {
  response.end('Hallo Welt');
}).listen(8080);
