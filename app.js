const express = require('express');
const cors = require('cors');
const app = express();

const middlewares = require('./middlewares');
const api = require('./api');

app.get('/' , (req , res) =>{
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use(cors())
app.use(express.json());

app.use('/api/v1' , api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;