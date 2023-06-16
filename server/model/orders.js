import mongoose from "mongoose";
import BigNumber from "bignumber.js";
import {categories} from "./enum/category.js";

const ordersSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 10
        },
        description: {
            type: String,
            required: true,
            minLength: 10
        },
        price: {
            type: BigNumber,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now()
        },
        day: {
            type: Number,
            default: 1
        },
        category: [{
            type: String,
            enum: Object.values(categories)
        }],
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customers'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    },
    { timestamps: true }
);

export default mongoose.model('Orders', ordersSchema);