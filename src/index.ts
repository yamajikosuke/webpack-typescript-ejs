import express from "express";
import * as bodyParser from "body-parser";
//import * as path from 'path';
import cookieParser from 'cookie-parser';

let defaultPort = 3000;
const app = express();
const router = express.Router();
app.set('views', './views')
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

// app.use("/", router);
if (process.env.NODE_ENV !== 'production') {
  let browserSync = require('browser-sync').create();
  browserSync.init({
    watch: true,
    open: false,
    logSnippet: false,
    proxy: `localhost:${defaultPort}`,
    files: ['./views/**/*', './public/css/*']
  });
}
app.set('port', defaultPort);
app.get('/', (req, res, next) => {
  res.render('pages/index', {
    title: 'Sample',
    message: 'Welcome to Website'
  }
 );
 console.log(req.query);
 next();
}, (req, res) => {
  console.log("callback2");
});

// app.use("/", router);

app.listen(defaultPort, () => {
  console.log("listening on port " + defaultPort);
});

export default app;
