const express = require ('express')
const router = express.Router()
const {Insert,View,Delete,Update}= require('../Controller/Product')
router.post ('/insert',Insert)
router.get('/view',View)
router.delete('/delete/:id',Delete)
router.put('/update/:id',Update)


module.exports=router