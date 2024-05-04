var express = require('express');

const avatar = require('../system/Avatar').Avatar;

var router = express.Router();

router.get('/avatar_all',(req,res,next) => {
  if(req.isAuthenticated())return next();
  user.forbidden(res);
},(req,res,next) => {
    avatar.all(req,res);

});

router.get('/avatar_all_template',(req,res,next) => {
  if(req.isAuthenticated())return next();
  user.forbidden(res);
},(req,res,next) => {
    avatar.allTemplate(req,res);

});
router.get('/avatar_id',(req,res,next) => {
  if(req.isAuthenticated())return next();
  user.forbidden(res);
},(req,res,next) => {
    avatar.getId(req,res);

});
router.post('/register_avatar',(req,res,next) => {
  if(req.isAuthenticated())return next();
  user.forbidden(res);
},(req,res,next) => {
  console.log("post register avatar ....",req.user);

  const { id, name } = req.body;
  let data = {
    id: id,
    name:name
  }
    avatar.register(user,data,res);

});
module.exports = router;
