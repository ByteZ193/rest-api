import mongoose from 'mongoose'//Importando el modulo mongoose para hacer la conexion con la base de datos
import config from './config'//Importando el archivo config


(async () => {//La conexion con mongodb es una peticion asincrona, por lo tanto se usa metodos asincronos
    try {
        const db = await mongoose.connect(config.mongodbURL, {//Estableciona la conexion con mongodb
            useNewUrlParser: true,//Se definene estos dos metodos en "true" para evitar los errores
            useUnifiedTopology: true
        });
        console.log('Database is connected to:', db.connection.name)//Monstrando un mesaje de conexion. Con el metodo .connection.name podemos ver el nombre de la base de datos a la que se esta conectando, dicho nombre esta guardado en el archivo .env en una variable de entorno. Se utilizan variables de entorno para que, si se publica este archivo, no vean cual es la ruta en la que se esta ejecutando el servidor, por eso el archivo .env se guarda en el archivo .gitignore.
    } catch (error) {
        console.log(error)//Este "try.catch" por si ocurre un error con el servidor, lo muestre por consola
    }
})();