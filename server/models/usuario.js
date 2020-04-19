'use strict'

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE',' USER_ROLE'],
    message: '{VALUE} no es un role valido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'El constraseña es necesario']
    },
    img:{
        type:String,
        required: false
    },//no es obligatorio
    role:{
        type: String ,
        enum: rolesValidos
    },//user:default:'ROLE_USER'
    estado:{
        type: Boolean,
        default: true
    },//boolean
    google:{
        type:String,
        default:false
    }//boolean
});

usuarioSchema.methods.toJSON = function(){
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;
}

usuarioSchema.plugin( uniqueValidator, { message: '{PATH} debe de ser unico'});

module.exports = mongoose.model('Usuario', usuarioSchema);