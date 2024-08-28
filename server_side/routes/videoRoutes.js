const express = require('express');
const router = express.Router();

const { getVideos, getVideoById } = require('../controller/videoController');

router.get('/', getVideos); 
router.get('/:id', getVideoById);

module.exports = router;
