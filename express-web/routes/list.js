const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {

  res.render('list', {
    title: '渲染列表',
    citys: ['南宁', '北京', '内蒙古', '呼和浩特']
  })

})
module.exports = router
