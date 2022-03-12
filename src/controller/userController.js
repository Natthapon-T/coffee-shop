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

router.get('/all', (req,res) => {
    let sql = 'SELECT * FROM user;'  // คำสั่ง sql
    let query =  db.query(sql,(err,results) => { // สั่ง Query คำสั่ง sql
    if(err) throw err  // ดัก error// แสดงผล บน Console 
    res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
})
})

router.get('/byId', (req,res) => {
    const id = req.query.id
    let sql = 'SELECT * FROM user WHERE id = '+id  // คำสั่ง sql
    let query =  db.query(sql,(err,results) => { // สั่ง Query คำสั่ง sql
    if(err) throw err  // ดัก error// แสดงผล บน Console 
    res.json(results)   // สร้างผลลัพธ์เป็น JSON ส่งออกไปบน Browser
})
})

router.get('/test', (req,res) => {
    const test = '[{"id":2,"username":"mypandacm","fristname":"Sapthawee","lastname":"Srichomthong","phone":"0903176990","email":"mypandacm","birthdate":"1994-11-24T17:00:00.000Z"}]'
    res.send(test)
})

module.exports = router;