const mongoose = require('mongoose');
require('dotenv').config();



const dbConfig = `mongodb+srv://${process.env.NAME}:${process.env.PASSWORD}@cluster0.yn1x4zz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

