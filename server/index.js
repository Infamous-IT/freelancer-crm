import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
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

// const options = {
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Freelancer CRM API',
//             version: '1.0.0'
//         },
//     },
//     apis: ['./routes/*.js'],
// };

mongoose.connection.on('Disconnected', () => {
    console.log('MongoDB was disconnected!');
})

// const swaggerSpec = swaggerJSDoc(options);
app.use(cors());
app.use(express.json());
app.use('/api', router)
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));


app.listen(PORT, () => {
    connect();
    console.log(`Connected to backend on port ${PORT}!`);
});