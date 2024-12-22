const Post = require('../models/postModel.js');

// GET /posts - Fetch all blog posts.
async function getAllPosts(req, res, next){
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        next(error);
    }
}
// POST /posts - Create a new blog post.
async function addPost(req, res, next) {
    try {
        const { post } = req.body;
        const newPost = new Post({
            title: post.title,
            content: post.content
        });
        const result = await newPost.save();
        res.json(result);
    } catch (error) {
        next(error);
    }
}
// GET /posts/:id - Fetch a single blog post by ID.
// PUT /posts/:id - Update a blog post by ID.
// DELETE /posts/:id - Delete a blog post by ID.
