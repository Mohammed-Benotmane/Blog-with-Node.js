const express = require('express');

const app = express();

app.set('view engine','ejs');


app.listen(3000);

app.get('/', (req,res)=>{
    res.render('index',{title: 'Home'});
});

app.get('/about', (req,res)=>{
    res.render('about');
});

app.get('/about-me', (req,res)=>{
    res.redirect('/about');
});

app.get('/blogs/create',(req,res)=>{
    res.render('create');
});

app.use((req,res)=>{
    res.status(404).render('404');
});