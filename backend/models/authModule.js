const mongoose=require('mongoose')

const Schema=mongoose.Schema

const UserShema=new Schema({
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    name:{
        type:String, 
    },
    versionKey: false
})

const UserModule=mongoose.model('users', UserShema)

module.exports=UserModule