# PruebaYudonpay
_A continuación se explicará el funcionamiento de la app_

## Arranque
_Primero de todo se tiene que tener instalado NodeJS_
_Para iniciar la aplicación es necesario estar en la carpeta en la que se encuentra el server.js y sobre esa misma carpeta abrir el terminal e introducir: _
```
node server.js
```
_Si se quiere utilizar la parte de la aplicación con front, ir a la url:_

```
http://localhost:9090
```

## API REST
_Desde el postman o cualquier otro programa similar se podrán hacer las llamadas para probar la API Rest siguiente_

#### Listado de todas las películas
_url:_
```
POST:  http://localhost:9090/getFilms
```

#### Listado de películas por género
_url:_
```
POST:  http://localhost:9090/listByGenre
```
_json de entrada_
```
{
  "genre":"genre"
}
```
#### Crear una película
_url:_

```
POST:  http://localhost:9090/createFilm
```
_json de entrada_
```
{
  "name": "NombrePelicula",
  "director": "DirectorPelicula",
  "yearRelease": AñoPelicula,
  "genre": ["Genero1", "Genero2", "..."]
}
```
#### Borrar una película
_url:_

```
POST:  http://localhost:9090/deleteFilm
```
_json de entrada_
```
{
  "name": "Star Wars"
}
```
#### Modificar una película
_url:_
```
POST:  http://localhost:9090/setFilm
```
_json de entrada_
```
{
  "name": "NombrePelicula",
  "director": "DirectorPelicula",
  "yearRelease": AñoPelicula,
  "genre": ["Genero1", "Genero2", "..."]
}
```
