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
  var browserSync = require('browser-sync');
  var bs = browserSync.create().init({
    watch: true,
    open: false,
    logSnippet: false,
    proxy: `localhost:${defaultPort}`,
    files: ['./views/**/*']
  });
  app.use(require('connect-browser-sync')(bs));
}
app.set('port', 3000);
app.get('/', (req, res, next) => {
  res.render('pages/index', {
    title: 'Sample1',
    message: 'Welcome to Website5',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>'
  }
 );
 console.log(req.query);
 next();
}, (req, res) => {
  console.log("callback2");
});

// app.use("/", router);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

export default app;
