const express = require('express');
const app = express();
const cors = require('cors');
const port = 9000;

// allow all CORS requests
app.use(cors());

//connect to postgres
const pgp = require('pg-promise')({});
const db = pgp("postgres://localhost:5432/eventonica");

app.get('/events', async ( req, res ) => {
    try {
        const events = await db.any('SELECT * FROM events;', [true]);
        console.log({ events });
        res.json( events );
    }
    catch(e) {
        console.log(e);
    }
})

app.get('/event/:eventid', async ( req, res ) => {
    try {
        const event = await db.any(`SELECT * FROM events WHERE eventid = ${req.params.eventid};`, [true]);
        res.json( event[0] );
    }
    catch(e) {
        res.status(500)
        res.render('error', { error: e })
    }
})

app.get('/users', async ( req, res ) => {
    try {
        const users = await db.any('SELECT * FROM users;', [true]);
        console.log({ users });
        res.json( users );
    }
    catch(e) {
        console.log(e);
    }
})

app.get('/user/:userid', async ( req, res ) => {
    try {
        const user = await db.any(`SELECT * FROM users WHERE id = ${req.params.userid};`, [true]);
        res.json( user[0] );
    }
    catch(e) {
        res.status(500)
        res.render('error', { error: e })
    }
})
app.get('/events/:id', async ( req, res ) => {
  try {
      const event = await db.any(`SELECT * FROM events WHERE id = ${req.params.id};`, [true]);
      res.json( event[0] );
  }
  catch(e) {
      res.status(500)
      res.render('error', { error: e })
  }
})
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})