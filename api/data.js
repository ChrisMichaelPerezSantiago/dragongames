const express = require('express');
const router = express.Router();

const T = require('./scrapping-3djuegos');

router.get('/all' , (req , res) =>{
  T.getAll().then((data) =>{
    res.status(200).json(data)
  });
});

module.exports = router;