const setting = require('../setting')
const {Db: DB, MongoClient} = require('mongodb')
const DB_URl = 'mongodb://localhost:27017/weiboDB'
MongoClient.connect(DB_URl, (err, db) => {
  console.log("Connected successfully to server");
  db.db('weiboDB')
    .collection('runoob'
    ).find({name:'蓝忘机'})
    .toArray(function(err, result) { // 返回集合中所有数据
    if (err) throw err;
    console.log(result);
    db.close();
  });
})
// module.exports = new DB(setting.db, MongoClient.connect(DB_URl))
module.exports = MongoClient
