// import connection
import db from "../config/database.js";
 
// Get All DOWNTIME
export const getDowntime = (result) => {
    // db.query("SELECT date_format(Datetime,'%d %b %Y %T') AS Datetime,SKU, Status, Reason FROM downtime WHERE status = 'STANDBY'", (err, results) => {             
        db.query("SELECT id, date_format(Datetime,'%d %b %Y %T') AS Datetime ,SKU, Status, Reason, DowntimeLoc, PIC, Catatan, lineName FROM downtime_proxy WHERE status IN ('STANDBY','BREAKDOWN','SETUP') ORDER BY id DESC", (err, results) => {                 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
//get downtime line chopp
export const getDowntimeChopp = (result) => {
        db.query("SELECT id, date_format(Datetime,'%d %b %Y %T') AS Datetime ,SKU, Status, Reason, DowntimeLoc, PIC, Catatan, lineName FROM downtime_proxy WHERE status IN ('STANDBY','BREAKDOWN','SETUP') and lineName = 'Chopp' ORDER BY id DESC", (err, results) => {                 
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

//get downtime line pasta
export const getDowntimePasta = (result) => {
    db.query("SELECT id, date_format(Datetime,'%d %b %Y %T') AS Datetime ,SKU, Status, Reason, DowntimeLoc, PIC, Catatan, lineName FROM downtime_proxy WHERE status IN ('STANDBY','BREAKDOWN','SETUP') and lineName = 'Pasta' ORDER BY id DESC", (err, results) => {                 
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
});   
}

//get downtime line almond
export const getDowntimeAlmond = (result) => {
    db.query("SELECT id, date_format(Datetime,'%d %b %Y %T') AS Datetime ,SKU, Status, Reason, DowntimeLoc, PIC, Catatan, lineName FROM downtime_proxy WHERE status IN ('STANDBY','BREAKDOWN','SETUP') and lineName = 'Almond' ORDER BY id DESC", (err, results) => {                 
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
});   
}

//get downtime line RMP
export const getDowntimeRMP = (result) => {
    db.query("SELECT id, date_format(Datetime,'%d %b %Y %T') AS Datetime ,SKU, Status, Reason, DowntimeLoc, PIC, Catatan, lineName FROM downtime_proxy WHERE status IN ('STANDBY','BREAKDOWN','SETUP') and lineName = 'Raw Material' ORDER BY id DESC", (err, results) => {                 
    if(err) {
        console.log(err);
        result(err, null);
    } else {
        result(null, results);
    }
});   
}

// Update Product to Database
export const updateDowntimebyId = (reason, pic, catatan, id, result) => {
    db.query("UPDATE downtime_proxy SET Reason = ?, PIC = ?, Catatan=? WHERE id = ?", [reason, pic, catatan, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get Single Product
export const getDowntimebyId = (id, result) => {
    db.query("SELECT date_format(Datetime,'%d %b %Y %T') AS Datetime,SKU, Status, Reason, DowntimeLoc, PIC, Catatan FROM downtime_proxy WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}