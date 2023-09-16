import { Schema, Types, model } from "mongoose";



const transferSchema = new Schema({
    sender: {
        type: Types.ObjectId,
        ref: 'Customer', // Reference to the "Customer" collection
        required: true
    },
    receiver: {
        type: Types.ObjectId,
        ref: 'Customer', // Reference to the "Customer" collection
        required: true

    },
    balance: {
        type: Number,
        required: true
    }
}, { timestamps: true })



export const transferModel = model('Transfer', transferSchema)