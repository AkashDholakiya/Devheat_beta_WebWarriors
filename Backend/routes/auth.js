const express = require('express');
const { register,Login,getuser,EditUser,DeleteUser } = require('../controllar/authControllar');
const router = express.Router();
const {TokenVerify} = require('../utils/TokenVerify');

router.post('/login', Login); 
router.post('/register' ,register);
router.get('/getuser/:id', TokenVerify, getuser)
router.put('/edituser/:id', TokenVerify, EditUser)
router.delete('/deleteuser/:id', TokenVerify, DeleteUser)
  
  
module.exports = router;  