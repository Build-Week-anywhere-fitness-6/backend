const express = require('express');
const authRouter = require('./auth/auth-router')

const server = express();

server.use(express.json());
server.use('/api/auth', authRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  module.exports = server