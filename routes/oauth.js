var express = require('express');
var router = express.Router();

router.get('/callback/:code', function(req, res, next) {
  res.render('oauth2-callback', { code: req.params.code });
});


module.exports = router;
