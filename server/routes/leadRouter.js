const express = require('express');

const router = express.Router();

const { postNewLead } = require("../controllers/leads");

router.post('/addContactUs', postNewLead);


module.exports = router;
