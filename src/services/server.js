import express from "express";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../../webpack.config.dev";

const port = process.env.PORT || 1900;
const app = express();
const compiler = webpack(config);

app.use((req, res, next) => {
    console.log("middleware for all requests");
    next();
});

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use("/redux-sample", (req, res, next) => {
    console.log("middleware for redux-sample requests");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../pages/index.html"));
});

app.listen(port);
console.log(`-------- server started ar port no ${port} --------`);
