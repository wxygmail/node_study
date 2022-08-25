var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
const users = {
  lwj:'蓝忘机'
}
router.all('/name/:username', (req,res,next) => {
  //检查用户是否存在
  if(users[req.params.username]){
    next()
  }else {
    next(new Error('username参数不得为空'))
  }

})
router.get('/name/:username', function (req, res, next) {
  res.send(`当前用户名字:${req.params.username}`);
});
router.put('/name/:username', function (req, res, next) {
  res.send(`路由控制权转移成功！`);
});

module.exports = router;
