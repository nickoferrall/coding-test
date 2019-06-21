const express = require('express');
const server = express();

const configureMiddleware = require('../config/middleware');
configureMiddleware(server);

const locationRoutes = require('../routes/locationRoutes');

server.use('/api', locationRoutes);

module.exports = server;
