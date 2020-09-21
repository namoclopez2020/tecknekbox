const UserModel = require('../models/User');


const get = (req, res) =>  {
    let usuarios = UserModel.find({})
        .exec( (err, usuariosDB) => {
            return res.json({
                usuariosDB
            });
        });
    
}

const create = (req,res) => {
    let body = req.body;

    Usuario = new UserModel({
        name: body.name,
        password : body.password,
        email : body.email,
    });

    Usuario.save((err, usuario) => {
        if(err) throw err;

        return res.json({
            usuario
        });
    });
    
}

module.exports = {
    get,
    create
};
  