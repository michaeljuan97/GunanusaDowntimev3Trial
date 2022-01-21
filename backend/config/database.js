import mysql from "mysql2"

// create the connection to database
// const db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'highlight',
//     database: 'gunanusa',
//     timezone:'Asia/Jakarta'
//   });
   
// export default db;

var db;

function handleDisconnect(){
  db = mysql.createConnection({
    host: '192.168.18.23',
    user: 'root',
    password: 'highlight',
    database: 'gunanusa'
    // timezone:'Asia/Jakarta'
    })
// db = mysql.createPool({
//     connectionLimit: 100, //important
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'highlight',
//     database: 'gunanusa',
//     debug: false
//     })


  db.connect(function(err) {
      if (err){
          console.log("Error connecting to db: ", err);
          setTimeout(handleDisconnect, 2000);
      };
      console.log("DB Connected!");
  });

  db.on('error', function(err){
      console.log("db error", err);
      if(err.code === 'PROTOCOL_CONNECTION_LOST'){
          handleDisconnect();
      }else {
          throw err;
      }
  });
};
handleDisconnect();
export default db;