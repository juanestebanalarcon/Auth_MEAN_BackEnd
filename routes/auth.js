const { Router } = require('express');
const { check } = require('express-validator');
const { CrearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


const router=Router();
//Rutas:
//Endpoint: crear un nuevo usuario:
router.post( '/new',[
    check('name','El nombre es obligatorio').isLength({min:5,max:20}).not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    check('password','La es contraseña es obligatoria').isLength({min:8}),
    validarCampos
],CrearUsuario);
//Endpoint: Login usuario:
router.post( '/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','La es contraseña es obligatoria').isLength({min:8}),
    validarCampos
],loginUsuario);
//Endpoint: validar Token:
router.get('/renew',validarJWT,revalidarToken);

module.exports=router;