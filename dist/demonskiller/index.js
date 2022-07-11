"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const demonskiller = express_1.default.Router();
demonskiller.get('/', (req, res) => {
    res.render('DemonsKiller/index.html');
});
demonskiller.get('/ar', (req, res) => {
    res.render('DemonsKiller/indexAr.html');
});
demonskiller.get('/en', (req, res) => {
    res.render('DemonsKiller/index.html');
});
exports.default = demonskiller;
