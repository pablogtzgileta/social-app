// Everything about authentication will be here - username, email, password
const express = require('express');
const router = express.Router(); // Makes us save text ex. instead of /api/users/test we use /test because we have it written on server.js and it autocompletes it

// res.json is similar to res.send but its gonna output json
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Users Works"}));

module.exports = router;
