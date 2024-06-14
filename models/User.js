import mongoose from "mongoose"
const users = mongoose.Schema(
    {
        email:{
            type: String,
            required: [true, 'Please Add email'],
            unique: true,
        },
        name: {
            type: String,
            required: [true, 'Please Add full name'],
            minlength: 3,
            maxlength: 20,
            trim: true,
        },
        subject: {
            type: String,
        },
        message: {
            type: String,
        },

    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Users', users);