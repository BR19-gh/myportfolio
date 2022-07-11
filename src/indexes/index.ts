import express from 'express';

const index = express.Router();

index.get('/ar', (req, res) => {
    res.render('indexAr.html');
});

index.get('/en', (req, res) => {
    res.render('index.html');
});

export default index;
