import express from 'express';
// import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3000;
const app = express();
const uri = process.env.URI;

mongoose.connect(uri).then(() => {
    console.log('connected');
});

app.get("/", (_req, res) => {
    res.send("Hellooo from the server");
});

app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`)
});