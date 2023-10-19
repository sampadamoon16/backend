const express = require('express')
const Registration = express.Router();


// const multerS3 = require('multer-s3')
// const { S3Client } = require('@aws-sdk/client-s3')
// const multer = require('multer')
// //////AWS S3 configuration/////////

// const s3 = new S3Client({
//     region: 'ap-south-1',
//     credentials: {
//         accessKeyId: "AKIAR236XVAAHAX7NQ7U",
//         secretAccessKey: "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"
//     }
// })

// ////////Storage Configuration for AWS s3 bucket///////

// let storage = multerS3({
//     s3: s3,
//     bucket: 'subcate',
//     acl: 'public-read',
//     metadata: (req, file, cb) => {
//         cb(null, { fieldName: file.fieldname })
//     },
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     key: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

// let upload = multer({ storage: storage })

const { getRegisterData, postRegisterData, updateRegisterData, updateRegStatus, updateRegPassword, updateRegDoc, getAdminShop } = require('../../controller/Retailer/Registration')

Registration.get("/api/retailer/viewshop/:reg_no", getRegisterData )
Registration.post("/api/retailer/newshopregister",  postRegisterData)
Registration.put("/api/retailer/updateshop/:reg_no", updateRegisterData)
Registration.patch("/api/retailer/status/:reg_no", updateRegStatus)
Registration.patch("/api/retailer/updatepassword/:reg_no", updateRegPassword) 
Registration.patch("/api/retailer/updatedocuments/reg_no", updateRegDoc)
Registration.get("/api/admin/viewshop", getAdminShop)  // SEE DATA IN DASHBORAD ADMIN TABLE

module.exports = Registration; 
