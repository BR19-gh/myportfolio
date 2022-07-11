"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogger = express_1.default.Router();
blogger.get('/', (req, res) => {
    res.render(`Blogger/home.html`);
});
blogger.get('/login', (req, res) => {
    res.render(`Blogger/login.html`);
});
blogger.get('/home', (req, res) => {
    res.render(`Blogger/home.html`);
});
blogger.get('/addBlog', (req, res) => {
    res.render(`Blogger/addBlog.html`);
});
exports.default = blogger;
