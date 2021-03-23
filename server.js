const express = require('express');
const router = express.Router();

var app = express();

app.use(router);

router.get('/message', function (req, res){
    res.send('Lista de mensajes');
});
router.post('/message', function (req, res){
    res.send('Se añadió el mensaje');
});
router.delete('/message', function (req, res){
    res.send('Se eliminó el mensaje');
});
router.patch('/message', function (req, res){
    res.send('Se actualizó el mensaje');
});
router.put('/message', function (req, res){
    res.send('Se modificó el mensaje');
});

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');