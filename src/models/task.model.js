import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: false
    },
    // ASOCIAMOS LA TAREA A UN USUARIO
    user: {
        type: mongoose.Schema.Types.ObjectId, // ID DE MONGODB
        ref: 'User', // Referimos al modelo User
        required: true
    }
},
{
    timestamps: true,
})

export default mongoose.model("Tasks", taskSchema)