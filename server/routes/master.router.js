const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated, rejectUnauthenticatedAdmin} = require('../modules/authentication-middleware.js');

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
      console.log(`Result: ${result.rows}`)
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
  const category = `"${req.params.category}"`;
  const text = `'${req.params.text}'`;
  console.log(`Arg 1:${category} Arg 2:${text}`);

  //TODO: send the whole %$2% as string

  const query = `SELECT "assets_master".id,"assetNumber","domain_name","ipv4","mac_addr", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id 
  WHERE $1 ILIKE '%' || $2 || '%';`;

  pool.query(query, [category, text])
    .then( result => {
      console.log(`Full Query Text: ${query} Result: ${result.rows}`);
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`Full Query Text: ${query}`);
      console.log('ERROR: GET searched asset', err);
      res.sendStatus(500)
    });
});


//get chart data
router.get('/chart', rejectUnauthenticated, (req, res) => {
  // debug server console log
console.log(`In /api/master/chart GET chart data`);

const query = `SELECT COUNT("asset_types".type_name) as "total_types", "asset_types".type_name FROM "assets_master" 
JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
GROUP BY "asset_types".type_name;`;

pool.query(query)
  .then( result => {
    console.log(`Result: ${result.rows}`)
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: GET asset by ID', err);
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
router.post('/add', rejectUnauthenticatedAdmin, (req, res) => {
  // POST route code here
  // debug server console log with post data
  console.log(`In /api/master/add POST Number: ${req.body.assetNumber}`);

  const queryText = `INSERT INTO "assets_master" 
  ("assetNumber", "domain_name", "ipv4", "mac_addr",
  "type_id", "location_id", "status_id")
  VALUES ($1, $2, $3, $4, $5, $6, $7);`;

  pool.query(queryText, [req.body.assetNumber, req.body.domain_name, req.body.ipv4, req.body.mac_addr, req.body.type_id, req.body.location_id, req.body.status_id])
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

//edit selected asset

router.put('/edit', rejectUnauthenticated, (req, res) => {
  // debug server console log
console.log(`In /api/master/edit/ with ID: ${req.body.id} 
NAME: ${req.body.domain_name} 
NUMBER: ${req.body.assetNumber} 
IP: ${req.body.ipv4} 
MAC: ${req.body.mac_addr} 
PUT selected asset`);

const query = `UPDATE "assets_master" SET ("assetNumber", "domain_name", "ipv4", "mac_addr") = ($2, $3, $4, $5)
WHERE id = $1;`;

pool.query(query, [ req.body.id, req.body.assetNumber, req.body.domain_name, req.body.ipv4, req.body.mac_addr ])
  .then( result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: PUT asset by ID', err);
    res.sendStatus(500)
  })

});

module.exports = router;