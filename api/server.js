const express = require('express');
const authRouter = require('./auth/auth-router')

const server = express();

server.use(express.json());
server.use('/api/auth', authRouter)

server.use(session({
  name: 'chocolatechip',
  secret: 'no no no', 
  cookie: {
    maxAge: 1000 * 60 * 60,
    
    secure: false,
    httpOnly: false, 
  },
  rolling: true,
  resave: false, 
  saveUninitialized: false, 
  store: new Store({
    knex: require('../data/dbConfig'),
    tablename: 'sessions',
    sidfieldname: 'foo',
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  })
}))


server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

  module.exports = server