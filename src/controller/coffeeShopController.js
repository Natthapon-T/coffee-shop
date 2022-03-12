const express = require('express')
const router = express.Router()

router.get('/coffeeShop', function(req, res){
    res.send('id: ' + req.query.id);
  });

router.get('/coffeeShops', function(req, res){
    res.get('This will return list of shop');
    
  });