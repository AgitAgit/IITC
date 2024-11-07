import express from 'express';
import usersRouter from './routes/usersRoute.js';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from the server...");
})

app.use('/api/users', usersRouter);

app.listen(PORT, () => {
    console.log("server is listening to port:", PORT);
});