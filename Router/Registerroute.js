const express = require ('express')
const router = express.Router()
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/user')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix+ '-' +file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  const {Register ,Login}= require('../Controller/Register')
  router.post ('/register',upload.single('image'),Register)
  router.post ('/login',Login)
module.exports=router