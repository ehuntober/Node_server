const express = require('express')
const hbs = require('hbs')

var app = express()

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res) =>{
    res.send({
        name: 'kelechi',
        like:[
            'cities',
            'buses'
        ]
    })
})

app.get('/about', (req,res) =>{
    // res.send('about page')
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    })
})

app.get('/bad',(req,res)=>{
    res.send({
        errormessage: 'Unable to handle request'
    })
})
app.listen(3000);