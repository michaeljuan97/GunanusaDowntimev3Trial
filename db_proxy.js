import mysql from "mysql2"

var db;
var catatan
var datetime_ori
var datetime_proxy
var sku
var status_ori
var status_proxy
var reason
var downtimeloc

function handleDisconnect(){
    db = mysql.createConnection({
      host: '127.0.0.1',
      user: 'root',
      password: 'highlight',
      database: 'gunanusa'
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
            handleDisconnect();
        }else {
            throw err;
        }
    });
  };
  handleDisconnect();


  function duplicate(){
    db.query("SELECT * from downtime2 order by id desc limit 1", function(err,result){
        if (err) throw err;
        console.log(result);
    
        datetime_ori = result[0].Datetime
        // datetime_proxy = new Date(datetime_ori).toISOString() //convert to string to enable regex
        // .replace(/T/, ' ') //replace T with space
        // .replace(/\..+/, '') //delete . and the rest of it

        datetime_proxy = new Date(new Date(datetime_ori).setHours(new Date(datetime_ori).getHours()+7)).toISOString()
        .replace(/T/, ' ') //replace T with space
        .replace(/\..+/, '') //delete . and the rest of it
        
        sku = result[0].SKU
        status_ori = result[0].Status
        reason = result[0].Reason
        downtimeloc = result[0].DowntimeLoc
        console.log(datetime_ori)
        console.log(datetime_proxy)
  
      });
      if (status_ori != status_proxy){
        db.query("INSERT INTO downtime_proxy(Datetime,SKU,Status,Reason,DowntimeLoc) VALUES('"+datetime_proxy+"','"+sku+"','"+status_ori+"','"+reason+"','"+downtimeloc+"')", function(err,result){
        if (err) throw err;
      });
      status_proxy = status_ori; //set ori and proxy status same

      }
      
  }

  setInterval(duplicate,1000) //check every minute