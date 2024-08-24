const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let _id;

const mongoConnect = (callback) => {
  MongoClient.connect("mongodb://localhost:27017/eat-well")
    .then((client) => {
      _db = client.db();
      console.log("Connected");
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw new Error("Database connection failed!");
  }
};

module.exports = {
  mongoConnect: mongoConnect,
  getDb: getDb,
};
