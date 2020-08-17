const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { blogs: result, title: 'Home' });
        })
        .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('blogs')
        })
        .catch((err) => {
            console.log(err);
        });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details', { blog: result, title: 'Blog Details' })
        })
        .catch((err) => console.log(err));
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blogs'})
        })
        .catch((err)=>console.log(err));
});

/*
router.get('/single-blog', (req, res) => {
    Blog.findById('5f24f05369f65d2ff073142a')
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})
*/
module.exports = router;
