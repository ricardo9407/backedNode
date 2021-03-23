const express = require('express');
const router = express.Router();
const response = require('./network/response');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(router);

router.get('/message', function (req, res){
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    console.log(req.query);
    console.log(req.body);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error simulado');
    }else{
        response.success(req, res, 'Lista de mensajes');
    }
});
router.post('/message', function (req, res){
    console.log(req.query);
    console.log(req.body);
    if (req.query.error == "ok"){
        response.error(req, res, 'Error simulado', 401);
    }else{
        response.success(req, res, 'Creado correctamente', 201);
    }
});
router.delete('/message', function (req, res){
    res.send('Se eliminó el mensaje');
});
router.patch('/message', function (req, res){
    res.status(201).send({error:'', body: 'Actualizado Correctamente'});
});
router.put('/message', function (req, res){
    res.send('Se modificó el mensaje');
});

app.use('/app', express.static('public'));
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');