import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: [true,'Why is there no name'],
        min: [6,'Too few letters'],
        max: 12
    },
    surname: {
        type: String,
        required:  [true,'Why is there no Surname']
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: [true,'Email is required']
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
               return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not valid phone number!`
        },
        required: [true,'User phone number required']
    }
})
const User = mongoose.model("User",userSchema)

export default User;
