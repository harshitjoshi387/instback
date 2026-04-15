const mongoose =require('mongoose')

const userSchema = mongoose.Schema({

    username:{
        name:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamp:true
})
const userModel = mongoose.model("users",userSchema)

module.exports = userModel