const express = require ('express');
const router = express.Router();
const Post = require('../models/Post');

//Get back all the posts
router.get('/', async (req, res)=> {
  try{
    const posts = await Post.find();
    res.json(posts)
  }catch(err){
    res.json({message: err})
  }
});

//submit all the posts
router.post('/', async(req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  console.log(post)

  try{
    const savedPost = await post.save( )
    res.json(savedPost)
    console.log(savedPost)
  }
  catch(err){
    res.json({message: err})
  }
});

//Specific posts
router.get('/:postId', async (req, res) => {
  try{
    const post = await Post.findById(req.params.postId)
    res.json(post);
  }catch(err){
    res.json({message: error})
  }
  
});

//delete post
router.delete('/:postId', async (req,res)=> {
  try{
    const removedPost = await Post.removed({ _id: req.params.postId})
    res.json(removedPost)
  }catch(err){
    res.json({message: err});
  }
})

//update post
router.patch('/:postId', async (req, res) => {
  try{
    const updatedPost =  await post.updateOne(
      {_id: req.params.postId}, 
      {$set: {title: req.body.title}});
    res.json(updatedPost)
  }
 catch(err){
   res.json({message: err})
 }
})

module.exports = router;