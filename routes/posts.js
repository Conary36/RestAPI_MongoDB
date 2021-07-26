const express = require('express');
const router = express.Router();

router.get('/posts', (req, res) => {
    res.send('We are posting stuff');
});

module.exports = router;