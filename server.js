require("dotenv").config();
const app = require('./src/app')
const connecttoDb = require("./src/config/db")

connecttoDb()


app.listen(3000,()=>{
    console.log('server is running on port 3000')
})