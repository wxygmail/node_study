const express = require('express');
const router = express.Router();
const {config} = require('../util')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    cardList: config.cardList
  });
});
router.get('/register', (req, res) => {
  res.render('register', {})
})
router.post('/register', (req, res) => {
  if (req.body['confirmPassword'] !== req.body['password']) {
    req.flash('error', '俩次输入的密码不一致')
    return res.redirect('/register')
  }
  const md5 = crypto.createHash('md5')
  const pwd = md5.update(req.body.password).digest('base64')

  const newUser = new User({
    name: res.body.username,
    password: pwd
  })

  User.get
  res.render('register', {})
})

module.exports = router;
