/* MySQL database for hostel-app*/
-- mysql version : "5.0.2"
-- Host : localhost
-- Please change user and password in indejx.js for your local database.
-- Amr Zahwi


-- Database : renting_database
CREATE DATABASE renting_database;

USE renting_database;


-- Table : renting , for saving rented rooms and renter details
CREATE TABLE renting (
firstName VARCHAR(255),
roomid INT UNIQUE,
phoneNumer INT,
receptionTime VARCHAR(255),
departureTime VARCHAR(255),
overAge18 VARCHAR(255),
overAge2 VARCHAR(255),
age2To17 VARCHAR(255)
);

-- Table : contactus , for saving contact queries
CREATE TABLE contactus (
firstName VARCHAR(255),
email VARCHAR(255),
creditor VARCHAR(255),
note VARCHAR(255)
);

/*INSERT INTO renting (firstName,roomid,phoneNumer,receptionTime,departureTime,overAge18,overAge2,age2To17) VALUES (?, ? , ? , ? , ? , ? , ? , ? );*/
/*INSERT INTO contactus (firstName,email,creditor,note) VALUES (?, ? , ? , ? )";*/
