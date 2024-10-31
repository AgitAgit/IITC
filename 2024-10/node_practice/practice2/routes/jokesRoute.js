import express from 'express';
import originalJokes from '../db/jokes.json' assert {type:'json'};
// import fs from 'fs';
import { writeToFileSync } from '../app.js';
import Joke from '../models/jokeModel.js';

let jokes = originalJokes;
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const jokes = await Joke.find();
        res.json(jokes);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
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

router.post('/single', async (req, res) => {
    const joke = new Joke({
      setup: req.body.setup,
      punchline: req.body.punchline,
    });
    try {
      const newJoke = await joke.save();
      res.status(201).json(newJoke);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
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