const { Schema, model } = require("mongoose");

//Schema para la DB documental (mongoDB)
const UsuarioSchema=Schema({
    name:{
        type:String,
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
    },
});

module.exports=model('Usuario',UsuarioSchema);