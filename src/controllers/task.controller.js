import Task from "../models/Task"

export const findAllTasks = async (req, res) => {//Controller para buscar todas las tareas
  const task = await Task.find() //El metodo .find para busar todos los datos que estan en la DB
  res.json(task)//Como lo que se va a mostar es un json, se usa con el "res" el metodo .json para que lo muestre. Como hace una consulta a la BD, se maneja con metodos asincronos
}

export const createTask = async (req, res) => {//Controller para crear un tarea
  const newTask = new Task({//Como se guarda datos en la DB, se maneja con metodos asincronos
    title: req.body.title,//El "req.body" es para tomar el contenido del json que es mandado por POST
    description: req.body.description,
    done: req.body.done ? req.body.done : false//Validacion para saber, si la propiedad "done" existe     (req.body.done ?), que la tome del json que se esta enviando por POST(req.body.done), sino que la ponga en false(: false)
  });
  const taskSaved = await newTask.save()//El metodo .save() para guardar datos en mongoDB con mongoose
  res.json(taskSaved)
}

export const findOneTask = async (req, res) => {//Controller para buscar una tarea
    const task = await Task.findById(req.params.id)//El metodo .finfById ara buscar especificamente por id en la base de datos, y el req.params es para tomar los datos que son enviados como parametros en la URL
    res.json(task)
}

export const deleteTask = async (req, res) => {//Controller para borrar tareas
    await Task.findByIdAndDelete(req.params.id)//El metodo .findByIdAndDelete para borrar especificamente por id en la base de datos
    res.json("Task was deleted succesfully")
}

export const findAllDoneTask = async (req, res) => {//Controller para buscar todas las tareas realizadas
    const task = await Task.find({done: true})//El metodo .find para buscar dentro de la base de datos
    res.json(task)
}

export const updateTask = async (req, res) => {//Controller para actualizar tareas
    await Task.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false
    })//El metodo .findByIdAndUpdate para actualizar una tarea en la base de datos
    res.json("Task updated succesfully")
}