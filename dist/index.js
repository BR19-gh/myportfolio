"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const indexes_1 = __importDefault(require("./indexes"));
const demonskiller_1 = __importDefault(require("./demonskiller"));
const dagshtick_1 = __importDefault(require("./dagshtick"));
const dawrati_1 = __importDefault(require("./dawrati"));
const blogger_1 = __importDefault(require("./blogger"));
const onethree_1 = __importDefault(require("./onethree"));
const logger_1 = __importDefault(require("./utilities/logger"));
const app = (0, express_1.default)();
const port = 3000;
/*
  ii to open static files in HTML (CSS/JS)
*/
app.engine('html', require('ejs').renderFile);
app.use('/static', express_1.default.static(path_1.default.join(__dirname, '../static')));
// middleware 
app.use(logger_1.default);
// routes
app.use('/lang', [indexes_1.default]);
app.use('/demonskiller', [demonskiller_1.default]);
app.use('/dagshtick', [dagshtick_1.default]);
app.use('/dawrati', [dawrati_1.default]);
app.use('/blogger', [blogger_1.default]);
app.use('/onethree', [onethree_1.default]);
// main routes
app.get('/', (req, res) => {
    res.render(`index.html`);
});
app.get('/ar', (req, res) => {
    res.render(`indexAr.html`);
});
app.get('/en', (req, res) => {
    res.render(`index.html`);
});
app.get('/test', (req, res) => {
    const error = new Error("message");
    error.code = "500";
    throw error;
});
app.use(function (err, req, res, next) {
    console.error(err);
    if (err.status == 404)
        res.status(404).render('errPages/404err.html');
    else if (err.status == 500)
        res.status(500).render('errPages/500err.html');
    next(err);
});
app.use(function (req, res, err) {
    console.error(err);
    res.status(404).render('errPages/404err.html');
});
app.listen(process.env.PORT || port, () => console.log(`listening on port http://localhost:${port}...`));
exports.default = app;
