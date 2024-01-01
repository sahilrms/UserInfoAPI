const express=require('express');
const router=express.Router();
const {home,registerUser,loginUser}=require('../controllers/userControllers')

router.get('/',home);
router.post('/register',registerUser);
router.post('/login',loginUser);

module.exports=router