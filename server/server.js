const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
// allow all CORS requests
app.use(cors());

//connect to postgres
const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/eventonica");

app.get("/events", async (req, res) => {
  try {
    const events = await db.any("SELECT * FROM events;", [true]);
    res.json(events);
  } catch (e) {
    console.log(e);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users;", [true]);
    console.log({ users });
    res.json(users);
  } catch (e) {
    console.log(e);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const user = await db.any(
      `SELECT * FROM users WHERE id = ${req.params.id};`,
      [true]
    );
    res.json(user[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

app.get("/events/:id", async (req, res) => {
  try {
    const event = await db.any(
      `SELECT * FROM events WHERE id = ${req.params.id};`,
      [true]
    );
    res.json(event[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
});

app.post('/addEvent', function (req, res) {
  //res.send('POST request to the homepage')
  db.none('INSERT INTO events (name, category, location, date, time, price, user_created) values ($1,$2,$3,$4,$5,$6,$7)',[req.body.name, req.body.category ,req.body.location, req.body.date, req.body.time, req.body.price, 2]).then(data => {
      console.log("SUCCESS: Event is added to the database"); // print new event id;
  })
  .catch(error => {
      console.log('ERROR:', error); // print error;
  });
});

app.post('/addUser', function (req, res) {
  db.none('INSERT INTO users (username, firstname, lastname, email) VALUES ($1, $2, $3, $4)', [req.body.username, req.body.fname, req.body.lname, req.body.email])
  .then(() => {
      // success
      console.log('SUCCESS: User is added to the database')
  })
  .catch(error => {
      // error
      console.log('ERROR:', error)
  });
});




app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
