import mongoose from "mongoose";
import BigNumber from "bignumber.js";

const customersSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            minLength: 1
        },
        county: {
            type: String,
            required: true,
            minLength: 3,
        },
        telegramNickname: {
            type: String,
            minLength: 3
        },
        avatar: {
            url: { type: String },
            contentType: { type: String },
            path: { type: String }
        },
        totalPayments: {
            type: BigNumber,
            default: 0
        },
        orders: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Orders'
        }],
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }]
    },
    { timestamps: true }
);

export default mongoose.model('Customers', customersSchema);