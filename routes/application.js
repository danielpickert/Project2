const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/application.js');

// home
router.get("/", applicationController.index)




module.exports = router;