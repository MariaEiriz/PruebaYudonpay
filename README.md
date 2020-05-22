# Ejercicio
_A continuación se explicará el funcionamiento de la app_

## Arranque
_Primero de todo se tiene que tener instalado NodeJS_
_Para iniciar la aplicación es necesario estar en la carpeta en la que se encuentra el server.js_
_Se abrirá el cmd y se ejecutará el siguiente código para instalar todas las dependencias_
```
npm install
```
### Tarea 1
_Si se quiere ejecutar la primera tarea, habrá que ejecutar:_
```
node server.js [url]
```
_Si no se pone esta estructura, o se añade un argumento mas (segunda tarea), lanzará un mensaje de error o ejecutará la segunda tarea respectivamente_

### Tarea 2
_Si se quiere ejecutar la segunda tarea, habrá que ejecutar:_

```
node server.js [url] [N]
```
## Dependencias
### request-promise
_Esta dependencia la he utilizado para hacer una peticion get a las urls y traerme su HTML correspondiente_
### jsdom
_Esta dependencia la he utilizado para convertir ese HTML, dado como un string, en un objeto del que se pueda extraer cada uno de los elementos del HTML_
