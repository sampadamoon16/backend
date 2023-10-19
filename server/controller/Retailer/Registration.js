const connection = require("../../Model/dbConnect")


const getRegisterData = (req, res) => {
    try {
        let id = req.params.reg_no
        let sqlQuery = "SELECT * FROM tbl_retailer_register where reg_no = ?";
        connection.query(sqlQuery, [id], function (error, result) {
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

const postRegisterData = (req,res) => {
    // console.log(req.body.reg_no, "kkkk")
    try {
        let sqlQuery = "INSERT INTO tbl_retailer_register SET ?"
        console.log("reqbody",req.body)
        let data = {
            reg_no:req.body.reg_no,
            gst_no: req.body.gst_no,
            tin_no: req.body.tin_no,
            shop_pan: req.body.shop_pan,
            shop_name: req.body.shop_name,
            contact_no: req.body.contact_no,
            mobile: req.body.mobile,
            website: req.body.website,
            email: req.body.email,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            doc_pan: req.body.doc_pan,
            doc_shop: req.body.doc_shop,
            t_and_c: req.body.t_and_c,
            // status: req.body.status,
            // regOn: req.body.regOn,
            password: req.body.password
        }
        // console.log(data, "FRFRFR")
        connection.query(sqlQuery, [data], function (error, result) {
            // console.log("inside query")

            if (error) {
                // console.log("Error:", error.sqlMessage)
            //   return  res.json(error);
                return res.status(500).json({ error: error.sqlMessage });

            } else {
                console.log("inside else")
                res.json(result);
            }
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: "Server error" })
    }
}


const updateRegisterData = (req, res) => {
    try {
        let id = req.params.reg_no
        let data = {
            reg_no: req.body.reg_no,
            gst_no: req.body.gst_no,
            tin_no: req.body.tin_no,
            shop_pan: req.body.shop_pan,
            shop_name: req.body.shop_name,
            contact_no: req.body.contact_no,
            mobile: req.body.mobile,
            website: req.body.website,
            email: req.body.email,
            address: req.body.address,
            state: req.body.state,
            city: req.body.city,
            pin: req.body.pin,
            doc_pan: req.body.doc_pan,
            doc_shop: req.body.doc_shop,
            t_and_c: req.body.t_and_c,
            status: req.body.status,
            regOn: req.body.regOn,
            password: req.body.password
        }
        let sqlQuery = "UPDATE tbl_retailer_register SET ? WHERE reg_no = ?"
        connection.query(sqlQuery, [data, id], function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
                res.status(500).send({ error: "internal server Error" })
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error("Error", error)
        res.status(500).send({ error: "Server Error" })
    }

}

const updateRegStatus = (req, res) => {
    try {
        let status = req.body.status
        // let mobile = req.body.mobile
        let id = req.params.reg_no
        sqlQuery = "UPDATE tbl_retailer_register SET status = ?  WHERE reg_no = ?"
        connection.query(sqlQuery, [status, id], function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
                res.status(500).send({ error: "internal server error" })
            } else {
                res.json(result)
            }
        })

    } catch (error) {
        console.error("Error", error)
        res.status(500).send({ error: "server error" })
    }
}

const updateRegPassword = (req, res) => {
    try {
        let password = req.body.password
        let id = req.params.reg_no
        sqlQuery = "UPDATE tbl_retailer_register SET password = ? WHERE reg_no = ?"
        connection.query(sqlQuery, [password, id], function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
                res.status(500).send({ error: "Internal server error" })
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.log("Error", error)
        res.status(500).send({ error: "Server error" })

    }
}

const updateRegDoc = (req, res) => {
    try {
        let documents = req.body.doc_shop
        // let pan = req.body.doc_pan
        let id = req.params.reg_no
        sqlQuery = "UPDATE tbl_retailer_register SET doc_shop = ?  WHERE reg_no = ?"
        connection.query(sqlQuery, [documents, id], function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
                res.status(500).send({ error: "Internal server error" })
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error("Error", error)
        res.status(500).send({ error: "Server error" })

    }
}

const getAdminShop = (req, res) => {
    try {
       
        let sqlQuery = "SELECT reg_no, shop_name , mobile, website, email, status FROM tbl_retailer_register";
        connection.query(sqlQuery, function (error, result) {
            if (error) {
                console.log("Error", error.sqlMessage)
                res.status(500).send({ error: "Server error" })
            } else {
                res.json(result)
            }
        })
    } catch (error) {
        console.error("Error", error)
        res.status(500).send({ error: "Internal server error" })
    }
}

module.exports = { getRegisterData, postRegisterData, updateRegisterData, updateRegStatus, updateRegPassword, updateRegDoc, getAdminShop }
