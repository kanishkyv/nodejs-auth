const mongoose = require('mongoose')

const newSchema= new mongoose.Schema({
 
    name:String,
    age:String
})
module.exports=mongoose.model('users',newSchema);