const express = require('express');
const router = express.Router();
const response = require('../../network/response');

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
    console.log(req.query);
    console.log(req.body);
    if (req.query.error == "ok"){
        response.error(req, res, 501, 'Es solo una simulacion de los errores');
    }else{
        response.success(req, res, 201);
    }
});
router.delete('/', function (req, res){
    res.send('Se eliminó el mensaje');
});
router.patch('/', function (req, res){
    res.status(201).send({error:'', body: 'Actualizado Correctamente'});
});
router.put('/', function (req, res){
    res.send('Se modificó el mensaje');
});

module.exports = router;