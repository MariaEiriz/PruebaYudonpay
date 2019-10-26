var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var data = require('./data.json');

server.listen(8070, function () {
    console.log('Server listening at port ' + 8070);
});

io.on('connection', function (socket) {
    io.sockets.emit("sendData", data);

})
exports.prueba = function (req, res) {
    res.send('OK');
}

exports.getFilms = function (req, res) {
    res.send(data.films);
}
exports.createFilm = function (req, res) {
    var newFilm = req.body;
    data.films.push(newFilm);
    res.send('Película creada!');
}
exports.setFilm = function (req, res) {
    var newFilm = req.body;
    var i;
    var pos = -1;
    for (i = 0; i < Object.keys(data.films).length; i++) {
        if (data.films[i].name == newFilm.name) {
            pos = i;
        }
    }
    if (pos != -1) {
        data.films[pos].name = newFilm.name;
        data.films[pos].director = newFilm.director;
        data.films[pos].yearRelease = newFilm.yearRelease;
        data.films[pos].genre = newFilm.genre;
        res.send('Película modificada!');
    } else {
        res.send('No había películas con esas características.');
    }
}
exports.deleteFilm = function (req, res) {
    var filmToDelete = req.body.name;
    var i;
    var pos = -1;
    for (i = 0; i < Object.keys(data.films).length; i++) {
        if (data.films[i].name == filmToDelete) {
            pos = i;
        }
    }
    if (pos != -1) {
        data.films.splice(pos,1);
        res.send('Película borrada!');
    } else {
        res.send('No había películas con ese nombre.');
    }
}
exports.listByGenre = function(req,res){
    var genre = req.body.genre;
    var coincidentes = [];
    for (i = 0; i < Object.keys(data.films).length; i++) {
        if (contenido(genre, data.films[i].genre)) {
            coincidentes.push(data.films[i]);
        }
    }
    res.send(coincidentes);
}

function contenido(cadena, array) {
    var i;
    var encontrado = false;
    for (i = 0; i < array.length; i++) {
        if (array[i] == cadena) {
            encontrado = true;
        }
    }
    return encontrado;
}