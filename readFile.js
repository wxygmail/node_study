const fs = require('fs')
const getFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./test.txt', {encoding: 'utf-8'}, ((err, data) => {
      if (err) {
        reject(new Error('读取文件失败'))
      } else {
        resolve(data)
      }
    }))
  })
}
const getFileSync = () => {

}
getFileSync()
module.exports = {getFile}
