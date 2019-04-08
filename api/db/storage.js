const path = require('path')
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(path.join(__dirname, 'db.json'));
const db = lowdb(adapter);

db.get('posts').push({}).write();

exports.getPosts = () => {
  return db
    .get('posts')
    .value();
};

db.clearDB = () =>{
  return db
    .remove()
    .write()
};

exports.startDB = async () => {
  await db.defaults({
    posts: []
  }).write();
};