const express = require('express');

const morgan = require('morgan');

const mongoose = require('mongoose');
const { result } = require('lodash');

const app = express();

const dbURI = 'mongodb+srv://mohammedbenotmane:1475963mimo@nodeblog.12e5a.mongodb.net/blog?retryWrites=true&w=majority';

mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology:true})
        .then((result)=> app.listen(3000))
        .catch((err)=>console.log(err));

app.set('view engine', 'ejs');




app.use(morgan('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    const blogs = [
        { title: "First Blog", snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?" },
        { title: "Second Blog", snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?" },
        { title: "third Blog", snippet: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?" },
    ];
    res.render('index', { title: 'Home', blogs: blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});