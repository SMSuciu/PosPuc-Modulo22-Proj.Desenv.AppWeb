require('dotenv').config(); //carrega as variaveis de ambiente do arquivo .env
//const sqlite = require('sqlite3')//carrega o sqlite3
const coll = require('cool-ascii-faces')
const express = require('express');
const port = process.env.PORT || 3001; //vai rodar na porta da variavel de ambientação ou na 3001
const app = express();

//const sqliteConfig = { //configuração do banco de dados
//    user: process.env.DB_USER,
//    password: process.env.DB_PASS, 
//    host: process.env.DB_HOST,
//    port: process.env.DB_PORT    
//}

//const connection = sqlite.createConnection(sqliteConfig); //cria a conexão com o banco de dados
//connection.connect((err) => {
//    if (err) {
//        console.error('Erro ao conectar ao banco de dados:', err);
//        return;
//    }
//    console.log('Conectado ao banco de dados SQLite');
//});

//app.get('/data', (req, res) => {
//    const sql = 'SELECT * FROM cliente'; //comando sql para selecionar todos os usuarios
//    connection.query(sql, [], (err, rows) => { //executa o comando sql
//        if (err) {
//            console.error('Erro ao executar a consulta:', err);
//            res.status(500).send('Erro ao executar a consulta');
//            return;
//        }
//        res.json(rows); //retorna os dados em formato json
//    });
//});

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