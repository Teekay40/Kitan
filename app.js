const fs = require('fs')
const express = require('express')
const exphbs = require('express-handlebars')

const app =express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))



app.engine('hbs', exphbs.engine({
    extname: '.hbs', defaultLayout: 'main.hbs', runtimeOptions:{
        allowProtoMethodsByDefault: true, allowProtoPropertiesByDefault: true
    }
}))

app.set('view engine', 'hbs')


app.get('/', (req, res) =>{
    res.render('home')
})

// app.post('/contact', (req, res) =>{
    
    
//     res.redirect('/')

// })

app.listen(3600, ()=>{
    console.log('Now Listening on Port 3600')
})



