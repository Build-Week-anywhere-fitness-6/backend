const express = require('express');
const authRouter = require('./auth/auth-router')
const classRouter = require('./classes/class-router')
const server = express();

server.use(express.json());
server.use('/api/auth', authRouter)
server.use('/api/classes', classRouter)

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  module.exports = server