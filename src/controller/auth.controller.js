const user= require('../model/userSchema')

const registerUser = async (req,res){
    res.send('Register api working')
}

module.exports={
    registerUser
}