import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

const PORT = process.env.PORT;
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


app.listen(PORT, () => {
    connect();
    console.log('Connected to backend!');
});