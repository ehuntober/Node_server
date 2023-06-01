const express = require('express')
const hbs = require('hbs')

var app = express()

hbs.registerPartials('/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear()

})

hbs.registerHelper('streamIt', (text)=>{
    return text.toUpperCase()

})

app.get('/',(req,res) =>{
    res.render('home.hbs',{
        pageTitle: 'Home page',
        welcome: 'Welcome to my website',
       
    })
})

app.get('/about', (req,res) =>{
    // res.send('about page')
    res.render('about.hbs',{
        pageTitle: 'About Page',
    
    })
})

app.get('/contact', (req,res) =>{
    // res.send('about page')
    res.render('contact.hbs',{
       
    })
})


app.get('/bad',(req,res)=>{
    res.send({
        errormessage: 'Unable to handle request'
    })
})
app.listen(3000);