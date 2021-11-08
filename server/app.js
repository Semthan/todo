var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI || 5000;

mongoose.connect(uri, { useNewUrlParser: true });
const { connection } = mongoose;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

var indexRouter = require('./routes/index');
var todosRouter = require('./routes/todo')

var app = express();

app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        credentials: true,
    }),
);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/todo', todosRouter)

module.exports = app;
