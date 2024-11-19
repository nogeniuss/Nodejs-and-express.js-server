const express = require('express');//chama o framework
const app = express(); //transforma em variavel
const port = 3000; //passa a porta na qual vamos trabalhar com o servidor

//criar a rota 
app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});
//lista a porta utilizada no terminal
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});