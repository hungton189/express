//cấu hình để sử dụng lowdb
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
//
db.defaults({ users: [],session:[]})
  .write();

  module.exports = db;
  