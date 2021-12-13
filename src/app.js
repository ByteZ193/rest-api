import express from 'express' //Importando express para crear un servidor
import TasksRoutes from "./routes/tasks.routes"; //Importando las rutas que se utilizaran en la app
import morgan from "morgan"
import cors from "cors"

const app = express() //Creando el servidor

//Configuracion
app.set('port', process.env.port || 3000) //Especificando en que puerto se ejecutara el servidor

//Estos son unmiddlewares, procesos que se tienen que ejecutar entes de algun proceso
app.use(cors())//Esto es para que cualquier seridor pueda realizar peticiones a este servidor. Se puede hacer una cofiguracion, pero si no se le indica nada el por default toma la direccion de este servidor
app.use(morgan('dev'))//Esto es para ejecutar "morgan" para ver las peticiones que se envian al servidor
app.use(express.json())//Aqui se usa el metodo .json de express para que pueda entender objetos json
app.use(express.urlencoded({extended: false}))//Para que pueda entender peticiones POST que se envien  desde formularios HTML

//Rutas
app.get('/', (req, res) => { //Definiendo que respueta dara cuando se haga una peticion get al servidor.
    res.json({message: 'Welcome to my app'})
});

app.use("/api/task", TasksRoutes)//Definiendo la ruta que se usara.

export default app //Exportando el servidor

//El primer paso para crear una API en express es configurar express, lo cual se esta haciendo en este archivo.