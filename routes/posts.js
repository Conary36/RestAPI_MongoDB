const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    // res.send('We are posting stuff');
    try {
        const post = await Post.find()
        res.json(post);
    }catch(err){
        console.log(message.err);
    }
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    post.save()
        .then((data) => {
            res.json(data) 

        });
        try{
            const savedPost = await post.save();
            res.json(savedPost);

        }catch(err) {
            res.json({message: err.message});
        }

    });


module.exports = router;