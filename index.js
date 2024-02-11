require('dotenv').config()  //required .env file

const express = require('express')
//this is also same as above:-  import express from 'express'
const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('aakashdownload98@gmail.com')
})

app.get('/login', (req, res) =>{
    res.send('<h1>My name is Aakash Kumar.</h1>')
})

app.get('/contact', (req, res)=>{
    res.send('<h2>I am from muzaffarpur bihar.</h2>')
})

app.listen(process.env.PORT, () => {  //used .env required variable
    console.log(`Example app listening on port ${port}`)
})