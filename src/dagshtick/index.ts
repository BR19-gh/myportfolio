import express from "express";

const dagshtick = express.Router();


dagshtick.get('/', (req, res) => {
    res.render(`Dagshtick/index.html`);
});


export default dagshtick;