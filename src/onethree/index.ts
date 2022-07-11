import express from "express";

const onethree = express.Router();


onethree.get('/', (req, res) => {
    res.render(`onethree/index.html`);
});


export default onethree;