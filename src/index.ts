import express from "express";
import * as bodyParser from "body-parser";
//import * as path from 'path';
import cookieParser from 'cookie-parser';

const app = express();
const router = express.Router();
app.set('views', './views')
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

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
