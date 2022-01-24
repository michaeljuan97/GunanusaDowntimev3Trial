import mysql from "mysql"

var db;

function handleDisconnect(){
  db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'C0mpn3t!',
    database: 'gunanusa'
    // timezone:'Asia/Jakarta'
    })

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
          db.release();
          handleDisconnect();
      }else {
          throw err;
          db.end();
          handleDisconnect();
      }
  });
};

setInterval(function () {
    db.query('SELECT 1');
}, 5000);
handleDisconnect();
export default db;