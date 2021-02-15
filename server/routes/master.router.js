const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  // debug server console log
  console.log(`In /api/type/ GET master`);
  const query = `SELECT "assets_master".id,"domain_name","ipv4","mac_addr", "isRetired", 
  "asset_types".type_name, "locations".loc_name , "asset_status".status_name FROM "assets_master"
  JOIN "asset_types" ON "asset_types".id = "assets_master".type_id
  JOIN "locations" ON "locations".id = "assets_master".location_id
  JOIN "asset_status" ON "asset_status".id = "assets_master".status_id;`;

  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all assets', err);
      res.sendStatus(500)
    });
});

//get one with genres
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const query = `SELECT "assets_master".id,"domain_name","ipv4","mac_addr", "isRetired", 
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
      console.log('ERROR: Get movie by ID', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  // debug server console log with post data
  console.log(`In /api/type/ POST ${req.body}`);

});

module.exports = router;