// location, bio, experiences, educations, social network links
const express = require('express');
const router = express.Router(); // Makes us save text ex. instead of /api/profile/test we use /test because we have it written on server.js and it autocompletes it

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;
