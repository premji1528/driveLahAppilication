const express = require('express');

const router = express.Router();

const { getAllLeadCollections, downloadLeads } = require("../controllers/admin");

router.get('/dowloadAllLeads', downloadLeads);
router.get('/getAllLeads', getAllLeadCollections);


module.exports = router;
