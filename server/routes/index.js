const express = require('express');
const router = express.Router();

/***** List of Router Controllers ****/
const adminRouter = require('./adminRouter');
const leadRouter = require('./leadRouter');

router.use('/admin', adminRouter);
router.use('/leads', leadRouter);

module.exports = router;