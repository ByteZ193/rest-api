import {Router} from "express"//Importando el router para poder crear las rutas
import * as taskCtrl from "../controllers/task.controller";
const router = Router()//Creando el router

router.post("/", taskCtrl.createTask)//Se llama al controller que procesara la peticion de crear una tarea

router.get("/", taskCtrl.findAllTasks)//Se llama al controller que buscara todas las tareas

router.get("/findDoneTask/:done", taskCtrl.findAllDoneTask)//Se llama al controller para buscar todas las tareas done

router.get("/:id", taskCtrl.findOneTask)//Se llama al controller para buscar una sola tarea

router.delete("/:id", taskCtrl.deleteTask)//Se llama al controller para borrar una tarea

router.put("/:id", taskCtrl.updateTask)//Se llama al controller para actualizar una tarea

export default router//Exportando el router