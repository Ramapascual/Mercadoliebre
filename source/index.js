const path =require("path");
const express = require('express');
const server = express();
server.listen(4000, () => console.log('Abriendo el servidor'))
const public =path.resolve(__dirname, '../public')

server.use(express.static(public))

server.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'views/home.html')))

server.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, 'views/login.html')))

server.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, 'views/register.html')))
