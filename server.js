const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials('/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res) =>{
    res.render('home.hbs',{
        pageTitle: 'Home page',
        welcome: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    })
})

app.get('/about', (req,res) =>{
    // res.send('about page')
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/contact', (req,res) =>{
    // res.send('about page')
    res.render('contact.hbs',{
        currentYear: new Date().getFullYear()
    })
})


app.get('/bad',(req,res)=>{
    res.send({
        errormessage: 'Unable to handle request'
    })
})
app.listen(3000);