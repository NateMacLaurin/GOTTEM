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
  const query = `SELECT * from "assets_master" ORDER BY "local_name" ASC
  `;

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