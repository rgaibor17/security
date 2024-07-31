var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    res.render('ticket', {token: process.env.TOKEN_SECRET});
  });

module.exports = router;
