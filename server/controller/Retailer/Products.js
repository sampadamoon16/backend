const connection = require("../../Model/dbConnect")

const getProducts = (req, res) => {
    try {
        let id = req.params.reg_no
        let sqlQuery = "SELECT * FROM tbl_retailer_products WHERE reg_no = ?";
        connection.query(sqlQuery, [id], function (error, result) {
            if (error) {
                console.log("Error:", error.sqlMessage);
                return res.status(500).send({ error: "Internal Server Error" });
            } else {
                res.json(result);
            }
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
}

const postProducts = (req, res) => {
    try {
        let sqlQuery = "INSERT INTO tbl_retailer_products SET ?"
        let data = {
            pid: req.body.pid,
            pname: req.body.pname,
            subcat_id: req.body.subcat_id,
            price: req.body.price,
            discount: req.body.discount,
            brand_name: req.body.brand_name,
            quantity: req.body.quantity,
            photo: req.body.photo,
            reg_no: req.body.reg_no,
            lastupdated: req.body.lastupdated,
            addon: req.body.addon,           
        }
        connection.query(sqlQuery, data, function (error, result) {
            if (error) {
                console.log("Error:", error.sqlMessage)
                return res.status(500).send({ error: "Internal Server Error" });

            } else {
                res.json(result);
            }
        })
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "Server error" })
    }
}

const updateProductPrice = (req, res) => {
    try{
        let id = req.params.pid;
        let price = req.body.price;

        let sqlQuery = "UPDATE tbl_retailer_products SET price = ? WHERE pid = ?"
        connection.query(sqlQuery, [price, id], function(error, result){
            if(error){
                console.log("Error", error.sqlMessage)
                res.status(500).send({error:" Internal server error"})
            }else{
                res.json(result)
            }
        })
    }catch(error){
        console.error("Error", error)
        res.status(500).send({error: "Internal server Error"})
    }
}

const updateProductDiscount = (req, res) => {
    try{
        let id = req.params.pid;
        let dis = req.body.discount;

        let sqlQuery = "UPDATE tbl_retailer_products SET discount = ? WHERE pid = ?";
        connection.query(sqlQuery, [dis, id], function(error, result){
            if(error){
                console.log("Error", error.sqlMessage)
                res.status(500).send({error:" Internal server error"})
            }else{
                res.json(result)
            }
        })
    }catch(error){
        console.error("Error", error)
        res.status(500).send({error: "Internal server Error"})
    }
}


const updateProductQuantity = (req, res) => {
    try{
        let id = req.params.pid;
        let qty = req.body.quantity;

        let sqlQuery = "UPDATE tbl_retailer_products SET quantity = ? WHERE pid = ?";
        connection.query(sqlQuery, [qty, id], function(error, result){
            if(error){
                console.log("Error", error.sqlMessage)
                res.status(500).send({error:" Internal server error"})
            }else{
                res.json(result)
            }
        })
    }catch(error){
        console.error("Error", error)
        res.status(500).send({error: "Internal server Error"})
    }
}


const getAdminProduct = (req, res) => {
    try{        
        let sqlQuery = "SELECT * FROM tbl_retailer_products ";
        connection.query(sqlQuery,  function(error, result){
            if(error){
                console.log("Error", error.sqlMessage)
                res.status(500).send({error:" Internal server error"})
            }else{
                res.json(result)
            }
        })
    }catch(error){
        console.error("Error", error)
        res.status(500).send({error: "Internal server Error"})
    }
}


module.exports = { getProducts, postProducts, updateProductPrice , updateProductDiscount, updateProductQuantity, getAdminProduct}