var express = require('express');

const avatar = require('../system/Avatar').Avatar;

var router = express.Router();

router.get('/avatar_all',(req,res,next) => {
  if(req.isAuthenticated())return next();
  user.forbidden(res);
},(req,res,next) => {
    avatar.all(req,res);

});
module.exports = router;
