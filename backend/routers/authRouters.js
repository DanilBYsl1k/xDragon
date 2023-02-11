const express=require('express')
const router=express.Router()
const {registerPost,loginPost}=require('../controllers/authControllers')

router.post('/register', registerPost)

router.post('/login', loginPost)

module.exports=router