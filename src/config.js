import { config } from 'dotenv'//Importando dotenv para el uso de variables de entorno
config()//Ejecutando el el modulo para que cargue las variables de entorno en todo el proyecto

export default{//Exportando el objeto que tendra las variables de entorno
    mongodbURL: process.env.MONGODB_URI || "mongodb://localhost/taskdb" //Guardando la variable de entorno en ota variable,
};