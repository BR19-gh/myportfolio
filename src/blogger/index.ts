import express from 'express';

const blogger = express.Router();

blogger.get('/', (req, res) => {
    res.render('Blogger/home.html');
});

blogger.get('/login', (req, res) => {
    res.render('Blogger/login.html');
});

blogger.get('/home', (req, res) => {
    res.render('Blogger/home.html');
});

blogger.get('/addBlog', (req, res) => {
    res.render('Blogger/addBlog.html');
});

export default blogger;
