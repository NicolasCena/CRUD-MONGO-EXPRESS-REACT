import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        required: true,
        trim: true,
        type: String
    },
    password: {
        required: true,
        trim: true,
        type: String
    },
    email: {
        required: true,
        trim: true,
        type: String,
        unique: true
    }
}, {
    timestamps: true // Permite añadir la fecha con la ultima modificasión
})

export default mongoose.model('User', userSchema);