const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

const dbURI = 'mongodb+srv://mohammedbenotmane:1475963mimo@nodeblog.12e5a.mongodb.net/blog?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


app.set('view engine', 'ejs');



// format log in the server
app.use(morgan('dev'));

// allow to access static files
app.use(express.static('public'));

// get data from form
app.use(express.urlencoded({ extended: true }));
/*
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: "new Blog",
        snippet: "lorem",
        body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?"
    });

    blog.save()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});
*/
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

app.use('/blogs',blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});