const express = require('express')
const port = 3000
const app = express()

app.get('/',(req,res) => {
    res.send("Hello world")
})

const coffeeController = require('/src/controller/coffeeShopController.js')
app.use('/shop', coffeeController)

const userController = require('/src/controller/userController')
app.use('/user', userController)

app.listen(port,() => {
    console.log("app starting onport ${port}")
})

