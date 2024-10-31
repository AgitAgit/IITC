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


router.get('/:id', getJoke, (req, res) =>{
    res.json(res.joke);
});

async function getJoke(req, res, next){
    const { id } = req.params;
    try{
        const joke = await Joke.findById(id);
        if(joke === null){
            return res.status(404).json({ message:"Joke not found"});
        }
        res.joke = joke;
    } catch (error){
        next(error);//is this proper handling of the error?
    }
    next();
}

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

router.post('/many', async (req, res) => {
    const { jokes } = req.body;
    try {
        const newJokes = await Joke.insertMany(jokes);
        res.status(200).json({ message: "post successfull", newJokes:newJokes});
    } catch (error){
        next(error);
    }
});

router.put('/:id', getJoke, async (req, res) => {
    if (req.body.setup != null) {
      res.joke.setup = req.body.setup;
    }
    if (req.body.punchline != null) {
      res.joke.punchline = req.body.punchline;
    }
    try {
      const updatedJoke = await res.joke.save();
      res.json(updatedJoke);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', getJoke, async (req, res) => {
    try {
        console.log(res.joke);
      await res.joke.remove();
      res.json({ message: 'Deleted Joke' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "something went wrong in the server..."});
});

export default router;