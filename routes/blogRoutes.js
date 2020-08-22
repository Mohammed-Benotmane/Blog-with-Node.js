const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get('/',blogController.blog_index);

router.post('/',blogController.blog_create_post);

router.get('/create', blogController.blog_create_get);

router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);

router.put('/:id',blogController.blog_edit);

/*
router.get('/single-blog', (req, res) => {
    Blog.findById('5f24f05369f65d2ff073142a')
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
})
*/
module.exports = router;
