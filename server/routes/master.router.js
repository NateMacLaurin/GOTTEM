const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware.js');

//get all assets

router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  // debug server console log
  console.log(`In /api/master/ GET all`);
  const query = `SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;`;

  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET all assets', err);
      res.sendStatus(500)
    });
});

//get one asset

router.get('/item/:id', rejectUnauthenticated, (req, res) => {
    // debug server console log
  console.log(`In /api/master/${req.params.id} GET one asset`);
  const id = req.params.id;
  const query = `SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id
  WHERE "assets_master".id = $1;`;

  pool.query(query, [id])
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET asset by ID', err);
      res.sendStatus(500)
    })

});

//get a searched asset

router.get('/search/query/:category/:text', rejectUnauthenticated, (req, res) => {
  // GET route code here
  // debug server console log
  console.log(`In /api/master/search/query/${req.params.category}/${req.params.text}' GET`);
  console.log(`Arg 1:${req.params.category} Arg 2:${req.params.text}`);
  const category = `"assets_master".${req.params.category}`;
  const text = `'%${req.params.text}%';`;

  const query = `SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id
  WHERE domain_name ILIKE '%PC%';`;

  pool.query(query, [category, text])
    .then( result => {
      console.log(`Full Query Text: ${query}`);
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`Full Query Text: ${query}`);
      console.log('ERROR: GET searched asset', err);
      res.sendStatus(500)
    });
});

//get the base search strings

router.get('/search/base', rejectUnauthenticated, (req, res) => {
  // GET route code here
  // debug server console log
  console.log(`In /api/master/search/base GET`);
  const query = `SELECT * FROM "search_base";`;

  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: GET base search categories.', err);
      res.sendStatus(500)
    });
});

//add new asset
router.post('/add', rejectUnauthenticated, (req, res) => {
  // POST route code here
  // debug server console log with post data
  console.log(`In /api/master/add POST ${req.body}`);

  const queryText = `INSERT INTO "assets_master" 
  ("assetNumber", "domain_name", "ipv4", "mac_addr",
  "type_id", "location_id", "status_id", "added_by")
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

  pool.query(queryText, [req.body.assetNumber, req.body.domain_name, req.body.ipv4, req.body.mac_addr, req.body.type_id, req.body.location_id, req.body.status_id, req.user.username])
  .then((result) => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('ERROR: POSTing new asset:', err);
    res.sendStatus(500)
  });
});

//delete selected asset

router.delete('/delete/:id', rejectUnauthenticated, (req, res) => {
  // debug server console log
console.log(`In /api/master/${req.params.id} DELETE selected asset`);
const id = req.params.id;
const query = `DELETE FROM "assets_master" WHERE id = $1;`;

pool.query(query, [id])
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: DELETE asset by ID', err);
    res.sendStatus(500)
  })

});

module.exports = router;