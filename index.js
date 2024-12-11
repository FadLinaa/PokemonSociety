"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.express)();
var port = process.env.PORT;
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pokedex'
});
connection.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected to MySQL Database!');
});