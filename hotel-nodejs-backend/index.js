console.log('index.js (start)');
const PORT = 3000;
const roo = require('./roomRecords');
let bodyParser = require('body-parser');
var express = require('express');
let server = express();
let cors = require('cors');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());

var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456'
});

//Connect To MySql
db.connect((err) => {

    if (err) {
        console.log('Error unable to connect to MySql');
    }
    console.log('MySql Connected...');
    let sql = 'use renting_database;';
    db.query(sql, (err, result) => {
        if (err) {
            console.log('err in use database =' + err.message);
        } else
            console.log('useing database renting_database');
    });
});
/*
 * Get API to return renting Form 
 */
server.get('/api/rentingForm', (req, res) => {

    let sql = 'SELECT * FROM renting;';
    console.log(sql);
    db.query(sql, function (error, results) {
        if (error) {
            console.error('select form error : ' + error);
        }
        res.send(JSON.stringify(results));

    });
});
/*
 * Get API to return contact Us Form  
 */
server.get('/api/contactUsForm', (req, res) => {

    let sql = 'SELECT * FROM contactus;';
    console.log(sql);
    db.query(sql, function (error, results) {
        if (error) {
            console.error('select form error : ' + error);
        }
        res.send(JSON.stringify(results));

    });
});
/*
 * Post API to Contact Us
*/
server.post('/api/contactus', (req, res) => {
    var result = [
        { "status": "ok" },
        { "msg": "הודעה נשלחה !" }
    ];

    contacting = {
        "firstName": req.body.firstName,
        "email": req.body.email,
        "creditor": req.body.creditor,
        "note": req.body.note,
    };

    var sql2 = "INSERT INTO contactus (firstName,email,creditor,note) VALUES (?, ? , ? , ? )";
    let firstName = contacting.firstName;
    let email = contacting.email;
    let creditor = contacting.creditor;
    let note = contacting.note;
    console.log(sql2);
    db.query(sql2, [firstName, email, creditor, note], function (err, sqlres) {
        if (err) {
            console.log("nooo!");
            console.log("Error : " + err);
            var no = [
                { "status": "no" },
                { "msg": "ההודעה נשלחה בהצלחה" }
            ];
            res.send(no);
        } else {
            res.send(result);
            console.log("new contactus !!!");
        }
    });

});

/*
 * Post API to rent room
*/
server.post('/api/rentroom', (req, res) => {
    var result = [
        { "status": "ok" },
        { "msg": "החדר הושכר בהצלחה!" }
    ];

    renting = {
        "firstName": req.body.firstName,
        "roomid": req.body.roomid,
        "phoneNumer": req.body.phoneNumer,
        "receptionTime": req.body.receptionTime,
        "departureTime": req.body.departureTime,
        "overAge18": req.body.overAge18,
        "overAge2": req.body.overAge2,
        "age2To17": req.body.age2To17,
    };

    var sql2 = "INSERT INTO renting (firstName,roomid,phoneNumer,receptionTime,departureTime,overAge18,overAge2,age2To17) VALUES (?, ? , ? , ? , ? , ? , ? , ? )";
    let firstName = renting.firstName;
    let roomid = renting.roomid;
    let phoneNumer = renting.phoneNumer;
    let receptionTime = renting.receptionTime;
    let departureTime = renting.departureTime;
    let overAge18 = renting.overAge18;
    let overAge2 = renting.overAge2;
    let age2To17 = renting.age2To17;

    console.log(sql2);
    console.log('Room id = ' + roomid);

    db.query(sql2, [firstName, roomid, phoneNumer, receptionTime, departureTime, overAge18, overAge2, age2To17], function (err, sqlres) {
        if (err) {
            console.log("nooo!");
            console.log("Error : " + err);
            var no = [
                { "status": "no" },
                { "msg": "החדר הושכר' בבקשה לבחור חדר אחר." }
            ];
            res.send(no);
        } else {
            res.send(result);
            console.log("new person details added to renting table !!!");
        }
    });

});
console.log('set port server listens');

server.listen(PORT, () => {
    console.log(`server is listen in port: ${PORT}`);
});

console.log('index.js (end)');
