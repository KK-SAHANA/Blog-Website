const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verifyToken = require('../verifyToken');

// ✅ Create a Post
router.post('/create', verifyToken, async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    console.error('Error creating post:', err);
    res.status(500).json({ message: 'Server error while creating post.' });
  }
});

// ✅ Update a Post
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error('Error updating post:', err);
    res.status(500).json({ message: 'Server error while updating post.' });
  }
});

// ✅ Delete a Post
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted");
  } catch (err) {
    console.error('Error deleting post:', err);
    res.status(500).json({ message: 'Server error while deleting post.' });
  }
});

// ✅ Get a Single Post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    console.error('Error getting post:', err);
    res.status(500).json({ message: 'Server error while fetching post.' });
  }
});

// ✅ Get All Posts or Filter by Category/User
router.get('/', async (req, res) => {
  const username = req.query.user;
  const category = req.query.category;

  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({ categories: { $in: [category] } });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching posts:', err);
    res.status(500).json({ message: 'Server error while fetching posts.' });
  }
});

// ✅ ✅ ✅ Get all posts by a specific user ID (used by MyBlogs.jsx)
router.get('/user/:id', async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.id });
    res.status(200).json(posts);
  } catch (err) {
    console.error('Error fetching user posts:', err);
    res.status(500).json({ message: 'Server error while fetching user posts.' });
  }
});

module.exports = router;
