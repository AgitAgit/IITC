import express, {json} from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
// import { assert } from 'console';

import originalJokes from './db/jokes.json' assert {type:'json'};
import originalUsers from './db/users.json' assert {type : 'json'};
import originalProducts from './db/products.json' assert{type:'json'};

import jokesRouter from './routes/jokesRoute.js';
import usersRouter from './routes/usersRoute.js';
import logger from './middleware/logger.js';

let jokes = originalJokes;
let users = originalUsers;
let products = originalProducts;

const app = express();

const PORT = 3000;

export function writeToFileSync(path, data){
    fs.writeFileSync(path, data);
}

app.use(json());

app.use('/', logger);

app.use(express.static('public'));

app.use('/api/jokes', jokesRouter);
app.use('/api/users', usersRouter);

app.get("/", (req, res) => {
    // res.send("Hello World");
    res.render('index.html');
})

app.get("/api/status", (req, res) => {
    res.send({
        message: "Server is UP"
    })
})
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(jokes);
});