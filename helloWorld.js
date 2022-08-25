const http = require('http')
const querystring = require('querystring')
const url = require("url");
http.createServer((req, res) => {
  let incomeData = ""
  req.on("data", data => {
    incomeData += data;
    console.log(2222)
  })
  req.on("end", () => {
    console.log(11111)
    const _u = new url.URL(req.url, 'http://' + req.headers.host)
    const _str = _u.search.substring(_u.search.indexOf('?') + 1)
    const _params = querystring.parse(incomeData)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(_params))
  })
}).listen(8080)

