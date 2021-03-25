const express = require('express');
const router = require('./network/routes');
//const router = require('./component/message/network');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(router);
router(app);
app.use('/app', express.static('public'));
app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');