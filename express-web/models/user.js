const mongodb = require('./db')

class User {
  constructor(name, passaord) {
    this.name = name;
    this.password = passaord
  }

  save(callback) {
    const user = {
      name: this.name,
      password: this.password
    }
    mongodb.open((err, db) => {
      if (err) {
        return callback(err)
      }
      db.collection('users', (err, collection) => {
        if (err) {
          mongodb.close()
          return callback(err)
        }

        // 为 name 属性添加索引
        collection.ensureIndex('name', {unique: true});
        // 写入 user 文档 9
        collection.insert(user, {safe: true}, function (err, user) {
          mongodb.close();
          callback(err, user);
        });
      })
    })
  }
}

module.exports = User
