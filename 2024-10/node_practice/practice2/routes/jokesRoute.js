import express from 'express';
import originalJokes from '../db/jokes.json' assert {type:'json'};
// import fs from 'fs';
import { writeToFileSync } from '../app.js';

let jokes = originalJokes;
const router = express.Router();

router.get('/', (req, res) => {
    res.send(jokes);
});

router.get('/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send(randomJoke)
});

router.get('/:id', (req, res) =>{
    const joke = jokes.find(joke => joke.id === parseInt(req.params.id));
    if(joke) res.send(joke);
    
    else res.send("joke not found...");
});

router.post('/single', (req, res) => {
    const newJoke = req.body;
    jokes.push(newJoke);
    writeToFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('joke added!');
});

router.post('/many', (req, res) => {
    const newJokes = req.body;
    jokes.push(...newJokes);
    writeToFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('jokes added!');
});

router.patch('/:id', (req, res) => {
    const newJoke = req.body;
    const id = parseInt(req.params.id);
    jokes.forEach(joke => {
        if(joke.id === id){
            jokes[jokes.indexOf(joke)] = newJoke;
            writeToFileSync('./db/jokes.json', JSON.stringify(jokes));
            res.send('patch successful!');
        }
    })
    res.send('patch failed!');
})

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    jokes = jokes.filter(joke => joke.id !== id);
    
    writeToFileSync('./db/jokes.json', JSON.stringify(jokes));
    res.send('delete successful!');
});

export default router;