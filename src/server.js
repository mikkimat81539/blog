const express = require('express')
const path = require('path')
const bcrypt = require('bcrypt')

const app = express()

// set view engine
app.set("view engine", "ejs");

//link my folders
app.use(express.static("public"))

// link my web pages
app.get("/", (req, res) => {
    res.render('home')
})

app.get("/about", (req, res) => {
    res.render('about')
})

app.get("/forum", (req, res) => {
    res.send('news & stories')
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.get("/signup", (req, res) => {
    res.send('signup')
})


// connect to port
app.listen(3000, () => {
  console.log("server running")
})