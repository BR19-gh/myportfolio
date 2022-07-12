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
// app.get('/test', (req, res) => {
//   const error: NodeJS.ErrnoException = new Error("message")
//   error.code = "500"
//   throw error;
// });
// error handlers
// Handle 404
app.use(function (req, res) {
    res.status(404);
    res.render('errPages/404err.html', { title: '404: File Not Found' });
});
// Handle 500
app.use(function (err, req, res, next) {
    res.status(500);
    res.render('errPages/500err.html', { title: '500: Internal Server Error', err: err });
});
app.listen(process.env.PORT || port, () => console.log(`listening on port http://localhost:${port}...`));
exports.default = app;
