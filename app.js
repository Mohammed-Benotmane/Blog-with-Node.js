const express = require('express');

const app = express();

app.set('view engine','ejs');


app.listen(3000);

app.get('/', (req,res)=>{
    const blogs = [
        {title:"First Blog", snippet:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?"},
    {title:"Second Blog", snippet:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?"},
    {title:"third Blog", snippet:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione impedit iure enim veritatis eaque excepturi! Velit veniam laboriosam impedit hic eius error placeat alias? Enim dolorum velit tempore a eligendi?"},
    ];
    res.render('index',{title: 'Home',blogs: blogs});
});

app.get('/about', (req,res)=>{
    res.render('about',{title: 'About'});
});

app.get('/about-me', (req,res)=>{
    res.redirect('/about');
});

app.get('/blogs/create',(req,res)=>{
    res.render('create',{title: 'Create a new Blog'});
});

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
});