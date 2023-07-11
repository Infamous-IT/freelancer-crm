import mongoose from "mongoose";
import {categories} from "./enum/category.js";
import {roles} from "./enum/roles.js";

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
        username: {
            type: String,
        },
        password: {
            type: String,
            required: true
        },
        country: {
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
        role: {
            type: String,
            enum: Object.values(roles)
        },
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

usersSchema.pre('save', function (next) {
    this.username = this.name + this.surname;
    next();
});

export default mongoose.model('Users', usersSchema);