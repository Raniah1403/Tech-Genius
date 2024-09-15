import mongoose from 'mongoose'; 

const usserSchema = new mongoose.Schema({
    email: {
        unique: true,
        validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password:{
        type: String,
        required: 
    },
});
