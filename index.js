require('dotenv').config(); //carrega as variaveis de ambiente do arquivo .env
const coll = require('cool-ascii-faces')
const express = require('express');
const port = process.env.PORT || 3001; //vai rodar na porta da variavel de ambientação ou na 3001
const app = express();

app.get('/', (req, res) => {
    //res.send('Hello World');
    console.log('Nova Feacture');
});


app.get('/coll', (req, res) => {
    res.send(coll());    
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})