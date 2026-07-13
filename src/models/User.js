import mongoose from 'mongoose';
const userRegistrationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 100
    },
    phoneNumber: {
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },

    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 100
    },
});
const User = mongoose.model('User', userRegistrationSchema);
export default User;