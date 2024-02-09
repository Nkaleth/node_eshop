const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db; // only be used internally in this file

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://nseguralu:Kaleth123@cluster0.kxqugrg.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => { 
  if (_db) {
    return _db;
  }
  throw 'No database founrd!';
 }

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
