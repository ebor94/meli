#CHALLENGE MELI 

*BACKEND
tecnologias utilizadas
express 
babel
redis  
axios
cors
nodemon
para ejecutar con la instruccion 
nodemon --exec babel-node server.js
este se ejecuta por el puerto 5000  
la primera vez consume el api  de <https://api.spaceflightnewsapi.net/v3/articles?_limit=100>
y posterior guarda en memoria el resultado  para futuras consultas
sobre la ruta <http://localhost:5000/space>
si se vuelven a hacer peticiones en un  tiempo menor a 5 minutos  el resultado se expone de lo que hay guardado en memoria para mejorar el tiempo en respuesta 
pasado los 5 minutos  la peticion se hace nuevamente a la url de la api de

*FRONEND 
ruta meli\gui
instruccion para la ejecucion npm start  
puerto 3000
tecnologias utilizadas
react 
javascript
react-boostrap
este codigo tiene la funcionalidad de ejecutar un paginador de 10 noticias por pagina 
