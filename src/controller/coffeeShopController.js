const express = require('express')
const router = express.Router()
const mysql = require('mysql') // เรียกใช้ mysql

const db = mysql.createConnection({   // config ค่าการเชื่อมต่อฐานข้อมูล
host     : 'www.srichomthong.com', 
user     : 'master',
password : '1qaz2wsx3edc',
database : 'coffee_shop'
})

db.connect(function(err) {
    if (err) {
        console.log(err.toString())
    } else {
        console.log("Connected!");
    }
})


router.get('/coffeeShop', function(req, res){
    res.send('id: ' + req.query.id);
  });

router.get('/coffeeShops', function(req, res){
    res.get('This will return list of shop');
  
  })
  
  module.exports = router;