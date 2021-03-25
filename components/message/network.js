const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    console.log(req.query);
    console.log(req.body);
    if (req.query.error == "ok"){
        response.error(req, res, 205, 'Es solo una simulacion de los errores');
    }else{
        response.success(req, res, 200);
    }
});
router.post('/', function (req, res){
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=> {
        response.success(req, res, fullMessage, 201);
    }).catch(e => {
        response.error(req, res, 400, 'Erro en el controlador');
    });
});

module.exports = router;