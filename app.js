const express = require('express');
const { connectDB } = require('./config/database')


global.__basedir = __dirname;   


connectDB()


const server = express()


server.use('/', router);


module.exports = server;