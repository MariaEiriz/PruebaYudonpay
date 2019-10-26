# PruebaYudonpay
_A continuación se explicará el funcionamiento de la app_

##Arranque
_Primero de todo se tiene que tener instalado NodeJS_
_Para iniciar la aplicación es necesario estar en la carpeta en la que se encuentra el server.js y sobre esa misma carpeta abrir el terminal e introducir: _
```
node server.js
```
_Si se quiere utilizar la parte de la aplicación con front, ir a la url:_

```
http://localhost:9090
```

##API REST
_Desde el postman o cualquier otro programa similar se podrán hacer las llamadas para probar la API Rest siguiente_

#### Listado de todas las películas
```
GET:  http://localhost:9090/getFilms
```

#### Listado de películas por género
```
GET:  http://localhost:9090/listByGenre
```

#### Crear una película
```
GET:  http://localhost:9090/createFilm
```

#### Borrar una película
```
GET:  http://localhost:9090/deleteFilm
```

#### Modificar una película
```
GET:  http://localhost:9090/setFilm
```
