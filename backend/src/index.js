const express = require('express');
const router = require('./routes');
const cors = require('cors');
require('./config/dbConfig');
require('./routes')
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Ola')
})

app.use(router);

app.listen(3333, () => {
    console.log("Servidor Rodando")
})