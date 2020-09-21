const express = require('express');
const app = express();
const userController = require('../controllers/UserController');


app.get('/user', userController.get);

app.post('/user', userController.create);



module.exports = app;