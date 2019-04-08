const express = require('express');

const router = express.Router();

const data = require('./data');

router.get('/' , (req , res) =>{
  res.json({
    message: '✨ Welcome To API Main End Point ✨'
  });
});

router.use('/3djuegos' , data);

module.exports = router;