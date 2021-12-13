import { Schema, model } from "mongoose"//Importando el "Schema" y el "model" para mongodb

const taskSchema = new Schema({ //El Schema es la plantilla en como se definiran los datos en la mongoDB
    title: {
        type: String, //Definiendo que tipo sera, en este caso un string
        required: true, //Especificando que este campo es requerido
        trim: true //Para que elimine espacios innecesarios
    },
    description: {
        type: String, 
        trim: true
    },
    done: {
        type: Boolean, //Definiendo que tipo sera, en este caso un booleano (true or false)
        default: false
    },
}, {
    versionKey: false, //Para que no aparesca el "__v"
    timestamps: true //Para que incluya las propiedades createdAt y updatedAt, y asi saber cuando se creo y cuando se actualizo
})

export default model('Task', taskSchema)//Exportando el Schema con el nombre "Task". Ya que el Schema sera usado por mongoose, esto se exporta como un modelo, de ahi que hayamos importado el "model". El "model" recibe como parametro el nombre que tendra el modelo y el Schema que usara.