const http = require('http')
const querystring = require('querystring')
const {getFile} = require('./readFile')
const params = querystring.stringify({
  name: '蓝忘机',
  age: 18,
  address: '云深不知处'
})
const req = http.request({
  host: 'localhost',
  port: 8080,
  method: "POST",
  path: '/message',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
}, (res) => {
  res.setEncoding("utf-8")
  res.on('data', (v) => {
    console.log(v, 8989)
  })
})
getFile().then(res => {
  console.log(res, 1111)
  req.write(res)
  req.end()
})

