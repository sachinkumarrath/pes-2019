import {MongoClient} from "mongodb";

// Connection url
const url = "mongodb://ds249017.mlab.com:49017/heroku_9sl76rdx";
// Database Name
const dbName = "heroku_9sl76rdx";
const urlCred = "mongodb://pes-admin:w3lc0m3t0p3s@ds249017.mlab.com:49017/heroku_9sl76rdx";
// Connect using MongoClient
const configOption = {
  "useNewUrlParser:": true,
  "useUnifiedTopology": true,
  "auth.user": "pes-admin",
  "auth.password": "w3lc0m3t0p3s"
};

export function connectDB() {
  //
  return MongoClient.connect(urlCred)
    .then(client => {
      console.log('database connected!');
      const dbInstance = client.db(dbName);
      return dbInstance.collection("match_reports").find()
        .toArray()
        .then(records => {
          client.close();
          return Promise.resolve(records)
        });
    })
    .catch(error => {
      console.log(error);
      return Promise.reject(error);
    });
  // MongoClient.connect(url, function(error, client) {
  //   if(error) {
  //     console.log(error);
  //     return;
  //   }
  //   console.log('database connected!');
  //   // Use the admin database for the operation
  //   //const adminDb = client.db(dbName).admin();
  //   const dbInstance = client.db(dbName);
  //   console.log("dbconnected");
  //   // List all the available databases
  //   //adminDb.listDatabases(function(err, dbs) {
  //   // client.close();
  //   //});
  //   client.close();
  // });
}