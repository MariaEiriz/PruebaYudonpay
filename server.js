var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes  = require('./app/routes.js'); 
var port = 9090; 

require('./app/controller');

//Configuramos la app para usar los modulos
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Ruta estática de recursos
app.use('/public', express.static('app/public')); 

var routes = require('./app/routes');

//Directorio raíz 
app.use('/',routes);

//Start the Server
app.listen(port, function() {
  console.log('Servidor escuchando el puerto '+port);
});

