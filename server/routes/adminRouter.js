const express = require('express');

const router = express.Router();

const { getAllLeadCollections, downloadLeads } = require("../controllers/admin");

router.get('/downloadAllLeads', downloadLeads);
router.get('/getAllLeads', getAllLeadCollections);


module.exports = router;
