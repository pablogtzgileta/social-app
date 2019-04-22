const express = require('express');
const router = express.Router(); // Makes us save text ex. instead of /api/posts/test we use /test because we have it written on server.js and it autocompletes it

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Posts Works"}));

module.exports = router;
