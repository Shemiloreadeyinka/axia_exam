const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    isAdmin:{type:String, required:true},
    hobbies:{type:String , default:[]}
}
, {timestamps:true})

const user=mongoose.model('user',userSchema)
module.exports=user;