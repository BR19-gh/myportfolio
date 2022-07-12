import express, { NextFunction, ErrorRequestHandler } from 'express'
import path from "path";

import indexes from './indexes';
import demonskiller from './demonskiller';
import dagshtick from './dagshtick';
import dawrati from './dawrati';
import blogger from './blogger';
import onethree from './onethree';

import logger from './utilities/logger';
import { nextTick } from 'process';


const app = express();
const port = 3000;
/* 
  ii to open static files in HTML (CSS/JS)
*/
app.engine('html', require('ejs').renderFile);
app.use('/static', express.static(path.join(__dirname, '../static')))


// middleware 
app.use(logger);
// routes
app.use('/lang', [indexes]);
app.use('/demonskiller', [demonskiller]);
app.use('/dagshtick', [dagshtick]);
app.use('/dawrati', [dawrati]);
app.use('/blogger', [blogger]);
app.use('/onethree', [onethree]);

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
app.use(function(req, res) {
  res.status(404);
 res.render('errPages/404err.html', {title: '404: File Not Found'});
 });
 
 // Handle 500
 app.use(<ErrorRequestHandler>function(err, req, res, next) {
   res.status(500);
 res.render('errPages/500err.html', {title:'500: Internal Server Error', err: err});
 });

app.listen(process.env.PORT || port, () => console.log(`listening on port http://localhost:${port}...`));

export default app;