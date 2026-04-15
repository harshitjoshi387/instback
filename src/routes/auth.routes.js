const express = require("express")
const router = express.Router()

const {registerUser}=require('../controller/auth.controller') 

router.get('/register',registerUser)

module.exports = router