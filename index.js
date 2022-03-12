const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send("Hello world")
})

const coffeeController = require('./src/controller/coffeeShopController.js')
app.use('/shop', coffeeController)

const userController = require('./src/controller/userController.js')
app.use('/user', userController)

app.listen(port,() => {
    console.log("app starting on port: " + port)
})