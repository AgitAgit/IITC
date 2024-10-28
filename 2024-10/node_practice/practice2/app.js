import express from 'express';
import jokes from './db/jokes.json' assert {type:'json'};

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api/status", (req, res) => {
    res.send({
        message: "Server is UP"
    })
})

app.get('/api/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send(randomJoke)
})

app.get('/api/jokes/:id', (req, res) =>{
    // console.log(req.params.id);
    const joke = jokes.find(joke => joke.id === parseInt(req.params.id));
    // console.log(joke);
    if(joke) res.send(joke);
    
    else res.send("joke not found...");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(jokes);
})