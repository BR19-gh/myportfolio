"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index = express_1.default.Router();
index.get('/ar', (req, res) => {
    res.render(`indexAr.html`);
});
index.get('/en', (req, res) => {
    res.render(`index.html`);
});
exports.default = index;
