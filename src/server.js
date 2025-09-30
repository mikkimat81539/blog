const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express()

//link my folders
app.use(express.static("public"))

// link my web pages
app.get("/", (req, res) => {
    res.send('home')
})

app.get("/signup", (req, res) => {
    res.send('signup')
})

app.get("/about", (req, res) => {
    res.send('about')
})

app.get("/contact", (req, res) => {
    res.send('contact')
})


// connect to port
app.listen(3000, () => {
  console.log("server running")
})