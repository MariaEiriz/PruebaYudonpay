var express = require('express');
var router = express.Router();
var controller = require('./controller.js'); 
router.get('/', function (req, res) {
	//Renderizamos el index cuando nos encontremos en la pagina de inicio '/peliculas'
	res.sendFile(__dirname + '/public/index.html');
});


router.get('/getFilms',controller.getFilms);
router.post('/setFilm',controller.setFilm);
router.post('/createFilm',controller.createFilm);
router.post('/deleteFilm',controller.deleteFilm);
router.post('/listByGenre',controller.listByGenre);

module.exports = router;
