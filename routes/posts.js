const express = require('express');
const router = express.Router();
const Post = require('../models/post');
//Get all posts
router.get('/', async (req, res) => {
    // res.send('We are posting stuff');
    try {
        const post = await Post.find()
        res.json(post);
    }catch(err){
        console.log(message.err);
    }
});
//Get one post
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


//Get one post by id
router.get('/:postId', async (req, res) => {
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);

    }catch(err){
        res.json(err.message);
    }

});

//Delete one post by id
router.delete('/:postId', async (req, res) => {
    try{
    const removedPost = await Post.remove({_id: req.params.postId});
    res.json(removedPost);

    }catch(err){
        res.json(err.message);
    }


});

//Update one post by id
router.patch('/:postId', async (req,res) => {
    try{
    const updatedPost = await Post.updateOne(
        {_id: req.params.postId}, 
        {$set: {title: req.body.title}},
        {$set: {description: req.body.description}});
    res.json(updatedPost);
    }catch(err){
        res.json(err.message);
    }
});

module.exports = router;