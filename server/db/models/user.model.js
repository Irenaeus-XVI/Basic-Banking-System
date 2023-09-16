import { Schema, model } from "mongoose";



const customerSchema  = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,

    },
    balance: {
        type: Number,
        required: true
    }
})



export const customerModel = model('Customer', customerSchema )