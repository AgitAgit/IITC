import Joke from '../models/jokeModel.js';

export const getJokes = async (req, res) => {
    try{
        const jokes = await Joke.find();
        res.json(jokes);
    }
    catch (error) {
        res.status(500).json({message: error.message});
    }
}