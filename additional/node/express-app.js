import express from 'express';

const app = express();

app.use(express.json());
app.use(express.static('/public'));

app.get('/', (request, response) => {
  console.log(request.body);
  response.send('Hallo Welt');
});

app.listen(8080);
