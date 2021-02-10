const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  // debug server console log
  console.log(`In /api/type/ GET`);

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