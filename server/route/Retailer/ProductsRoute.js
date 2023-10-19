const express = require('express')
const Products = express.Router();

const { getProducts, postProducts, updateProductPrice, updateProductDiscount, updateProductQuantity, getAdminProduct } = require('../../controller/Retailer/Products')

Products.get("/api/retailer/product/productlist/:reg_no", getProducts)
Products.post("/api/retailer/product/addproduct", postProducts)
Products.patch("/api/retailer/product/updateprice/:pid", updateProductPrice)
Products.patch("/api/retailer/product/updatediscount/:pid", updateProductDiscount)
Products.patch("/api/retailer/product/updatequantity/:pid", updateProductQuantity)
Products.get("/api/admin/product/allproducts", getAdminProduct)

module.exports = Products 
