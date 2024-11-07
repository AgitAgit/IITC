import express, {json} from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/usersRoute.js';
import dotenv from 'dotenv';
import { logger } from './middleware/logger.js';

dotenv.config();

const PORT = 3000;
const app = express();
const uri = process.env.URI;

await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('the db is connected...');
});

app.use(json());
app.use('/', logger);

app.get('/', (req, res) => {
    res.send("Hello from the server...");
})

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log("server is listening to port:", PORT);
});