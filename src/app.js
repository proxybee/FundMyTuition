import express from 'express';
import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import logger from'morgan';
import db from './models/index'




let app = express();

//Configure Express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(`${__dirname}/../public`)));

app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


// //Routes
// app.use('/', (req, res) => {
//   return res.render('default/index');
// });

app.get('/', (req, res) => {
  return res.status(200).json({ msg: 'Welcome to Send-It API.'});
});


app.get((err, req, res, next) => {
  res.status(500).send('Something is broken!')
})

const port = (process.env.PORT || 5050);

const server = app.listen(port, () => console.log(`Server Running on ${port}`));

module.exports = app;
