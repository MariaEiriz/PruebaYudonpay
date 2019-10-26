var socket = io.connect('http://localhost:7070', { 'forceNew': true });
var dataFilms;
socket.on('sendData', function (data) {
    console.log(data);
    dataFilms = data.films;
});
function crearPelicula() {
    var checkbox = document.querySelectorAll("[name=genre]");
    var genresChecked = [];
    var i;
    for (i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            genresChecked.push(checkbox[i].value);
        }
    }
    var pelicula = {
        name: document.getElementById("nameFilm").value,
        director: document.getElementById("directorFilm").value,
        yearRelease: document.getElementById("yearFilm").value,
        genre: genresChecked
    }
    dataFilms.push(pelicula);
}
function listarPorGenero() {
    var genre = document.getElementById("filmList").value;
    var i;
    var coincidentes = [];
    for (i = 0; i < dataFilms.length; i++) {
        if (contenido(genre, dataFilms[i].genre)) {
            coincidentes.push(dataFilms[i]);
        }
    }
    for (i = 0; i < coincidentes.length; i++) {
        var cadena = '<p><b><u>Nombre:</u></b> ' + coincidentes[i].name + '. <b>Director:</b> ' + coincidentes[i].director + '. <b>Año:</b> ' + coincidentes[i].yearRelease + '. <b>Generos</b>: ';
        var j;
        for (j = 0; j < coincidentes[i].genre.length; j++) {
            cadena = cadena + coincidentes[i].genre[j];
            if (j != coincidentes[i].genre.length - 1) {
                cadena = cadena + ', ';
            }
        }
        cadena = cadena + '</p><br>';
        document.getElementById("listado").innerHTML += cadena;
    }
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
function cargarPeliculas() {
    document.getElementById("allFilms").innerHTML = "";
        document.getElementById("allFilmsDelete").innerHTML = "";
    var i;
    for (i = 0; i < dataFilms.length; i++) {
        document.getElementById("allFilms").innerHTML += "<option value='" + dataFilms[i].name + "'>" + dataFilms[i].name + "</option>";
        document.getElementById("allFilmsDelete").innerHTML += "<option value='" + dataFilms[i].name + "'>" + dataFilms[i].name + "</option>";
    }
}

function modificarPelicula() {
    var i;
    for (i = 0; i < dataFilms.length; i++) {

        if (dataFilms[i].name == document.getElementById("allFilms").value) {
            console.log ("hiohio");
            var genresChecked = [];
            var checkbox = document.querySelectorAll("[name=genreSet]");

            for (i = 0; i < checkbox.length; i++) {
                if (checkbox[i].checked) {
                    genresChecked.push(checkbox[i].value);
                }
            }
            dataFilms[i].name = document.getElementById("nameFilmSet").value;
            dataFilms[i].director = document.getElementById("directorFilmSet").value;
            dataFilms[i].yearRelease = document.getElementById("yearFilmSet").value;
            dataFilms[i].genre = genresChecked;
        }
    }
}
function borrarPelicula(){
    var i,pos; 
    for (i = 0; i < dataFilms.length; i++) {
        if (dataFilms[i].name == document.getElementById("allFilms").value) {    
            pos= i; 
        }
    }
    dataFilms.splice(pos,1);
    cargarPeliculas();
}