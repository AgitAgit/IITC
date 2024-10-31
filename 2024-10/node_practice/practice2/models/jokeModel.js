import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
    // id:Number,
    setup:String,
    punchline:String
})

const output = mongoose.model('Joke', jokeSchema);

export default output;