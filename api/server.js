const express = require('express');
const fitnessRouter = require('./fitness-router.js')

const server = express();

server.use(express.json());
server.use('/api/fitness', fitnessRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  module.exports = server