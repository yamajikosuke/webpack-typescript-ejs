import express from "express";
import * as bodyParser from "body-parser";
//import * as path from 'path';
import cookieParser from "cookie-parser";
import browserSync from "browser-sync";

const defaultPort = 3000;
const app = express();
app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

// app.use("/", router);
if (process.env.NODE_ENV !== "production") {
  browserSync.init({
    watch: true,
    open: false,
    logSnippet: false,
    proxy: `localhost:${defaultPort}`,
    files: ["./views/**/*", "./public/**/*"]
  });
}
app.set("port", defaultPort);
app.get(
  "/",
  (req, res, next) => {
    res.render("pages/index", {
      title: "Sample",
      message: "Welcome to Website"
    });
    console.log(req.query);
    next();
  },
  () => {
    console.log("callback2");
  }
);

// app.use("/", router);

app.listen(defaultPort, () => {
  console.log("listening on port " + defaultPort);
});

export default app;
