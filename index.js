const express = require('express');
const post = process.env.POST || 3001; //vai rodar na porta da variavel de ambientação ou na 3001
const app = express();

app.get('/', (req, res) => {
    //res.send('Hello World');
    console.log('Nova Feacture');
});

app.listen(post, () => {
    console.log(`Servidor rodando na porta ${post}`);
})