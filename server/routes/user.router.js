const express = require('express');
const {
  rejectUnauthenticated, rejectUnauthenticatedAdmin
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles Axios request for all users information if user is administrator
router.get('/users', rejectUnauthenticatedAdmin, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  
  const queryText = `SELECT * FROM "user";`

  pool.query(queryText)
    .then(result => {
      console.log(`Result: ${result.rows}`)
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('GET all users for admin failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/toggle', (req, res, next) => {
  
  const toggleID = req.body.id;

  console.log(`ToggleID: ${toggleID}`);

  const queryText = `UPDATE "user"
  SET "isAdmin" =NOT "isAdmin"
  WHERE "id" = $1;`;

  pool
    .query(queryText, [toggleID])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User toggle admin failed: ', err);
      res.sendStatus(500);
    });
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
