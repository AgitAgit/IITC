import express, {json} from 'express';
import originalJokes from './db/jokes.json' assert {type:'json'};
import originalUsers from './db/users.json' assert {type : 'json'};
import originalProducts from './db/products.json' assert{type:'json'};

import fs from 'fs';
import { assert } from 'console';

let jokes = originalJokes;
let users = originalUsers;
let products = originalProducts;


const app = express();

const PORT = 3000;

app.use(json());

//general routes
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/api/status", (req, res) => {
    res.send({
        message: "Server is UP"
    })
})


//joke routes
app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

app.get('/api/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send(randomJoke)
});

app.get('/api/jokes/:id', (req, res) =>{
    const joke = jokes.find(joke => joke.id === parseInt(req.params.id));
    if(joke) res.send(joke);
    
    else res.send("joke not found...");
});

app.post('/api/jokes/single', (req, res) => {
    const newJoke = req.body;
    jokes.push(newJoke);
    fs.writeFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('joke added!');
});

app.post('/api/jokes/many', (req, res) => {
    const newJokes = req.body;
    jokes.push(...newJokes);
    fs.writeFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('jokes added!');
});

app.patch('/api/jokes/:id', (req, res) => {
    const newJoke = req.body;
    const id = parseInt(req.params.id);
    jokes.forEach(joke => {
        if(joke.id === id){
            jokes[jokes.indexOf(joke)] = newJoke;
            fs.writeFileSync('./db/jokes.json', JSON.stringify(jokes));
            res.send('patch successful!');
        }
    })
    res.send('patch failed!');
})

app.delete('/api/jokes/:id', (req,res) => {
    const id = parseInt(req.params.id);
    jokes = jokes.filter(joke => joke.id !== id);
    
    fs.writeFileSync('./db/jokes.json', JSON.stringify(jokes));
    res.send('delete successful!');
});

//joke routes
app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

app.get('/api/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send(randomJoke)
});

app.get('/api/jokes/:id', (req, res) =>{
    const joke = jokes.find(joke => joke.id === parseInt(req.params.id));
    if(joke) res.send(joke);
    
    else res.send("joke not found...");
});

app.post('/api/jokes/single', (req, res) => {
    const newJoke = req.body;
    jokes.push(newJoke);
    fs.writeFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('joke added!');
});

app.post('/api/jokes/many', (req, res) => {
    const newJokes = req.body;
    jokes.push(...newJokes);
    fs.writeFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('jokes added!');
});

app.patch('/api/jokes/:id', (req, res) => {
    const newJoke = req.body;
    const id = parseInt(req.params.id);
    jokes.forEach(joke => {
        if(joke.id === id){
            jokes[jokes.indexOf(joke)] = newJoke;
            fs.writeFileSync('./db/jokes.json', JSON.stringify(jokes));
            res.send('patch successful!');
        }
    })
    res.send('patch failed!');
})

app.delete('/api/jokes/:id', (req,res) => {
    const id = parseInt(req.params.id);
    jokes = jokes.filter(joke => joke.id !== id);
    
    fs.writeFileSync('./db/jokes.json', JSON.stringify(jokes));
    res.send('delete successful!');
});



//joke routes
app.get('/api/jokes', (req, res) => {
    res.send(jokes);
});

app.get('/api/jokes/random', (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
    res.send(randomJoke)
});

app.get('/api/jokes/:id', (req, res) =>{
    const joke = jokes.find(joke => joke.id === parseInt(req.params.id));
    if(joke) res.send(joke);
    
    else res.send("joke not found...");
});

app.post('/api/jokes/single', (req, res) => {
    const newJoke = req.body;
    jokes.push(newJoke);
    fs.writeFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('joke added!');
});

app.post('/api/jokes/many', (req, res) => {
    const newJokes = req.body;
    jokes.push(...newJokes);
    fs.writeFileSync('./db/jokes.json',JSON.stringify(jokes));  
    res.send('jokes added!');
});

app.patch('/api/jokes/:id', (req, res) => {
    const newJoke = req.body;
    const id = parseInt(req.params.id);
    jokes.forEach(joke => {
        if(joke.id === id){
            jokes[jokes.indexOf(joke)] = newJoke;
            fs.writeFileSync('./db/jokes.json', JSON.stringify(jokes));
            res.send('patch successful!');
        }
    })
    res.send('patch failed!');
})

app.delete('/api/jokes/:id', (req,res) => {
    const id = parseInt(req.params.id);
    jokes = jokes.filter(joke => joke.id !== id);
    
    fs.writeFileSync('./db/jokes.json', JSON.stringify(jokes));
    res.send('delete successful!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(jokes);
});