const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

app.set('view-engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.route('/')
.get((req,res)=>{

    res.render('dashboard.ejs')
})


app.route('/coperate')
.get((req,res)=>{
    res.render('corperate.ejs')
})
.post((req,res)=>{
    
})

app.listen(8181,console.log('8181...'))