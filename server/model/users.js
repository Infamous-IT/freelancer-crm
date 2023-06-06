import mongoose from "mongoose";

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
        // order list
        // customer list
    }
);

export default mongoose.model('Users', usersSchema);