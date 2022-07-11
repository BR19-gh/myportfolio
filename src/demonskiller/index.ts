import express from 'express';

const demonskiller = express.Router();

demonskiller.get('/', (req, res) => {
    res.render('DemonsKiller/index.html');
});

demonskiller.get('/ar', (req, res) => {
    res.render('DemonsKiller/indexAr.html');
});

demonskiller.get('/en', (req, res) => {
    res.render('DemonsKiller/index.html');
});

export default demonskiller;
