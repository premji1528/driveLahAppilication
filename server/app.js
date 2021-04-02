const express = require("express"),
  bodyParser = require("body-parser"),
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

app.get("/", (req, res) => {
  res.json({ message: "Welcome to drivelah application." });
});


const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.Leads.deleteMany({}),
    ]);
  }
});


// set port, listen for requests
const PORT = CONFIG.PORT || 8081;
console.log('Port Check', PORT)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
