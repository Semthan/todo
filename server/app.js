var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true });
const { connection } = mongoose;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/', postsRouter)

module.exports = app;
