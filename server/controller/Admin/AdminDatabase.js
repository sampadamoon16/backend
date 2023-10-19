const connection = require("../../Model/dbConnect");
const bcrypt = require('bcrypt')
const salt = 10;


const getData = (req, res) => {
    try {
        let sqlQuery = "SELECT * FROM tbl_adminusers";
        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.log("Error:", error.sqlMessage);
                return res.status(500).json({ error: "Internal Server Error" });
            } else {
                res.json(result);
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const getDataById = (req, res) => {
    try {
        let uid = req.params.uid
        let sqlQuery = "SELECT * FROM tbl_adminusers WHERE uid = ?";
        connection.query(sqlQuery, uid, function (error, result) {
            if (error) {
                console.log("Error:", error.sqlMessage);
                return res.status(500).json({ error: "Internal Server Error" });
            } else {
                res.json(result);
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




const postData = (req, res) => {
    try {
        let sqlQuery = "insert into tbl_adminusers set?";
        let data = {
            uid: req.body.uid,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile,
            photo: req.file.location,
            aadhar: req.body.aadhar,
            doj: req.body.doj,
            qualification: req.body.qualification,
            dob: req.body.dob,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            status: req.body.status
        }

        connection.query(sqlQuery, data, function (error, result) {
            if (error) {
                console.error('Error inserting user: ', error);
                res.status(500).send('Error inserting user');
            }
            else {
                console.log("user inserted");
                res.send("User registered successfully");
            }
        })

    } catch (error) {
        console.log("error found...", error.message)
    }
}


const updateData = (req, res) => {
    let uid = req.params.uid
    // let data = req.body
    let data = {

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        photo: req.file.location,
        aadhar: req.body.aadhar,
        doj: req.body.doj,
        qualification: req.body.qualification,
        dob: req.body.dob,
        address: req.body.address,
        state: req.body.state,
        city: req.body.city,
        pin: req.body.pin,
        status: req.body.status
    }

    let sqlQuery = "UPDATE  tbl_adminusers SET ? WHERE uid = ?"
    connection.query(sqlQuery, [data, uid], function (err, result) {
        if (err)
            res.send(err)
        else
            res.send(result)
    });
}


const updateStatus = (req, res) => {
    let uid = req.query.uid
    let status = req.query.status    

    let sqlQuery = "UPDATE  tbl_adminusers SET status = ? WHERE uid = ?"
    connection.query(sqlQuery, [status, uid], function (err, result) {
        if (err)
            res.send(err)
        else
            res.send(result)
    });
}


const deleteData = (req, res) => {
    let eid = req.params.uid
    let sqlQuery = "DELETE FROM tbl_adminusers WHERE uid = ?"
    connection.query(sqlQuery, eid, function (err, result) {
        if (err)
            res.send(err)
        else
            res.send(result)
    });
}


module.exports = { getData, getDataById, postData, updateData, updateStatus, deleteData };

