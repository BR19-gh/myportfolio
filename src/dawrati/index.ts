import express from 'express';

const dawrati = express.Router();

dawrati.get('/', (req, res) => {
    res.render('dawrati/main.html');
});

export default dawrati;
