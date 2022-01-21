import mysql from "mysql2"

var db;
var catatan
var datetime_ori
var datetime_proxy
var datetime_ori_pasta
var datetime_proxy_pasta
var sku
var sku_pasta
var status_ori
var status_proxy
var status_ori_pasta
var status_proxy_pasta
var reason
var downtimeloc
var reason_pasta
var downtimeloc_pasta

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
    db.query("SELECT * from downtime order by id desc limit 1", function(err,result){
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
        db.query("INSERT INTO downtime_proxy(Datetime,SKU,Status,Reason,DowntimeLoc,lineName) VALUES('"+datetime_proxy+"','"+sku+"','"+status_ori+"','"+reason+"','"+downtimeloc+"','Chopp')", function(err,result){
        if (err) throw err;
      });
      status_proxy = status_ori; //set ori and proxy status same

      }
      
  }

  function duplicate_pasta(){
    db.query("SELECT * from downtimepasta order by id desc limit 1", function(err,result){
        if (err) throw err;
        console.log(result);
    
        datetime_ori_pasta = result[0].Datetime
        datetime_proxy_pasta = new Date(new Date(datetime_ori_pasta).setHours(new Date(datetime_ori_pasta).getHours()+7)).toISOString()
        .replace(/T/, ' ') //replace T with space
        .replace(/\..+/, '') //delete . and the rest of it
        
        sku_pasta = result[0].SKU
        status_ori_pasta = result[0].Status
        reason_pasta = result[0].Reason
        downtimeloc_pasta = result[0].DowntimeLoc
        console.log(datetime_ori_pasta)
        console.log(datetime_proxy_pasta)
  
      });
      if (status_ori_pasta != status_proxy_pasta){
        db.query("INSERT INTO downtime_proxy(Datetime,SKU,Status,Reason,DowntimeLoc,lineName) VALUES('"+datetime_proxy_pasta+"','"+sku_pasta+"','"+status_ori_pasta+"','"+reason_pasta+"','"+downtimeloc_pasta+"','Pasta')", function(err,result){
        if (err) throw err;
      });
      status_proxy_pasta = status_ori_pasta; //set ori and proxy status same

      }
      
  }

  function updateReasonCode(){
    db.query("UPDATE downtime_proxy dp, reason_table rt \
    SET dp.ReasonCode = rt.ReasonCode \
    WHERE dp.Reason = rt.Reason", function(err,result){
        if (err) throw err;
        console.log(result);
  
      });
      
  }

  setInterval(duplicate,1000) //check every minute
  setInterval(duplicate_pasta,2000) //check every minute

  setInterval(updateReasonCode,3000) //check every minute