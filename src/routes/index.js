const express = require('express');
const path = require('path');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', {
        title: 'express',
        jsPath: path.resolve(__dirname, 'dist'),
    });
});

module.exports = router;
