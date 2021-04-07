const express = require("express"),
  bodyParser = require("body-parser"),
  path = require('path'),
  cors = require("cors"),
  indexRouter = require('./routes/index'),
  app = express(),
  { CONFIG } = require("./config/constants");

require('dotenv').config();
const { models, connectDb } = require('./models');

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', indexRouter);
app.use("/files", express.static(__dirname + "/files"));

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Leads.deleteMany({}),
    ]);
  }
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/*', function (request, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'), function (err) {
      if (err) {
          res.status(500).send(err)
      }
  })
})

module.exports = app;
