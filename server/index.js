import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './route/index.js';

const PORT = process.env.PORT || 8081;
const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('Connected to MongoDB');
    } catch (e) {
        throw new e;
    }
}

mongoose.connection.on('Disconnected', () => {
    console.log('MongoDB was disconnected!');
})

app.use(cors());
app.use(express.json());
app.use('/api', router)

app.listen(PORT, () => {
    connect();
    console.log(`Connected to backend on port ${PORT}!`);
});