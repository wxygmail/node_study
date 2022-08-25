const config = require('./config/config.default')
const app = require('./app')

app.listen(config.APP_PORT, () => {
  console.log(`serve runing http://localhost:${config.APP_PORT}`)
})
