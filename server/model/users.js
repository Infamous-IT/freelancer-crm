import mongoose from "mongoose";
import {categories} from "./enum/category.js";

const usersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 1
        },
        surname: {
            type: String,
            required: true,
            minLength: 3
        },
        county: {
            type: String,
            required: true,
            minLength: 3,
        },
        city: {
            type: String,
            minLength: 3
        },
        avatar: {
            url: { type: String },
            contentType: { type: String },
            path: { type: String }
        },
        phone: {
            type: String,
        },
        jobsTitle: [{
            type: String,
            enum: Object.values(categories)
        }],
        rating: {
            type: String
        },
        totalIncome: {
            type: Number,
            default: 0
        },
        isOnline: {
            type: Boolean,
            default: false
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Orders'
        }],
        customers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Customers'
        }]
    },
    { timestamps: true }
);

export default mongoose.model('Users', usersSchema);