const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'biblioteca'
});

const create = (req, res) => {
    let nomelivro = req.body.nomelivro;
    let nomeautor = req.body.nomeautor;
    let descricao = req.body.descricao;
    let data = req.body.data;

    let query = `INSERT INTO biblioteca (nomelivro, nomeautor, descricao, data) value`;
    query += `('${nomelivro}', '${nomeautor}', '${descricao}','${data}')`;

    con.query(query, (err, result) => {
        if (err) {
            console.log("Erro ao cadastrar livro");
        } else {
            console.log("Livro cadastrado com sucesso!");
        }

    });

};

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const teste = (req, res) => {
    console.log("Funcionando");
};

app.get("/", teste);
app.post("/biblioteca", create);


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});