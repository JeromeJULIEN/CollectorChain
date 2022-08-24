const express = require('express');

const router = express.Router();

const eventsController = require('../controllers/eventsController');

router.get('/events', eventsController.eventPage);
router.post('/events', eventsController.eventPage);
/*
router.delete('/events', eventsController.eventPage);
router.patch('/events', eventsController.eventPage);
*/
module.exports = router;
