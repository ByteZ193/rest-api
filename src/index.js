import app from './app'//Se importa el servidor configurado
import './database'

app.listen(app.get('port'))//Aqui se ejecuta el seridor especificandole el puerto como parametro. El metodo ".get('port')" es para decirle que tome el puerto especificado en su configuracion.
console.log('Server on port', app.get('port')) //Mostrando un mensaje por consola cuando se ejecute el servidor.

//Se creo un script para que no tengamos que reiniciar el servidor cada vez que hagamos cambios en el codigo, se llama "start". Esto ejecuta nodemon, que es lo que nos ayuda a mantener el seridor corriendo mientras realizamos cambios, y lo hace con Babel para utilizar las ultimas funciones de JavaScript.