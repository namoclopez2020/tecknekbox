const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;


let usuarioSchema = new Schema({
    name:{
        type: String,
        required : [true,'El nombre es necesario']
    },
    email:{
        type: String,
        unique :true,
        required : [true,'El correo es necesario']
    },
    password:{
        type: String,
        required : [true,'La contraseña es necesaria']
    },
    estado:{
        type: Boolean,
        default : true
    },
    google:{
        type: Boolean,
        default : false
    },
    created_at:{
        type: Date,
        default : Date.now
    },
    updated_at:{
        type: Date,
        default : Date.now
    },
});

// usuarioSchema.methods.toJSON = function() {
 
//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;
 
//     return userObject;
// }

usuarioSchema.plugin(uniqueValidator,{message:'{PATH} debe ser unico'});

module.exports = mongoose.model('Usuario',usuarioSchema);