const express = require('express');
const middlewares = require('../middlewares');
const router = express.Router();

const T = require('./scrapping-3djuegos');

let {cache} = middlewares;

router.get('/all' , (req , res) =>{
  T.getAll().then((data) =>{
    res.status(200).json(data)
  });
} , cache(60*60*24));

router.get('/videos' , (req , res) =>{
  T.getVideoContent().then((data) =>{
    res.status(200).json(data)
  })
} , cache(60*60*24))

module.exports = router;