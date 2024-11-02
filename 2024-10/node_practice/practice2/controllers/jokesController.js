import mongoose from "mongoose";
import Joke from '../models/jokeModel.js';

export async function getJoke(req, res, next){
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

export const getJokes = async (req, res, next) => {
    try{
        const jokes = await Joke.find();
        // console.log("@ss");
        // console.log(jokes);
        res.body = {};
        res.body.jokes = jokes;
        res.body.test = "test test test"
        next();
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}

export async function getIdsByContent(req, res, next){
    const { setup, punchline } = req.body.joke;
    // console.log("@ss");
    console.log("setup: ", setup, "punchline: ", punchline);
    let jokeIds;
    try{
        jokeIds = await Joke.find({ setup: setup, punchline: punchline }, '_id');
        console.log(jokeIds);
        res.jokeIds = jokeIds;
        next();
    }
    catch (error){
        next(error);
    }
}