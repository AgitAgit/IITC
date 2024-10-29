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
app.use((req, res, next) => {
    console.log("the middleware has been passed...");
    // console.log(`method: ${req.method} route: ${req.query}`);
    // console.log(req.query);
    console.log('------------------------');
    console.log(req.originalUrl);
    console.log(req._parsedUrl);
    console.log(req._parsedUrl);


    next();
})
app.use(express.static('public'));

//general routes
app.get("/", (req, res) => {
    // res.send("Hello World");
    res.render('index.html');
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



//user routes
app.get('/api/users', (req, res) => {
    res.send(jokes);
});

app.get('/api/users/random', (req, res) => {
    const randomUser = jokes[Math.floor(Math.random() * users.length)]
    res.send(randomUser)
});

app.get('/api/users/:id', (req, res) =>{
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(user) res.send(user);
    
    else res.send("user not found...");
});

app.post('/api/users/single', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    fs.writeFileSync('./db/users.json',JSON.stringify(users));  
    res.send('user added!');
});

app.post('/api/users/many', (req, res) => {
    const newUsers = req.body;
    users.push(...newUsers);
    fs.writeFileSync('./db/users.json',JSON.stringify(users));  
    res.send('users added!');
});

app.patch('/api/users/:id', (req, res) => {
    const newUser = req.body;
    const id = parseInt(req.params.id);
    users.forEach(user => {
        if(user.id === id){
            users[users.indexOf(user)] = newUser;
            fs.writeFileSync('./db/users.json', JSON.stringify(users));
            res.send('patch successful!');
        }
    })
    res.send('patch failed!');
})

app.delete('/api/users/:id', (req,res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    
    fs.writeFileSync('./db/jokes.json', JSON.stringify(users));
    res.send('delete successful!');
});


// Product routes
app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/random', (req, res) => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    res.send(randomProduct);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(product => product.id === parseInt(req.params.id));
    if (product) res.send(product);
    else res.send("Product not found...");
});

app.post('/api/products/single', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    fs.writeFileSync('./db/products.json', JSON.stringify(products));
    res.send('Product added!');
});

app.post('/api/products/many', (req, res) => {
    const newProducts = req.body;
    products.push(...newProducts);
    fs.writeFileSync('./db/products.json', JSON.stringify(products));
    res.send('Products added!');
});

app.patch('/api/products/:id', (req, res) => {
    const newProduct = req.body;
    const id = parseInt(req.params.id);
    products.forEach(product => {
    if (product.id === id) {
        products[products.indexOf(product)] = newProduct;
        fs.writeFileSync('./db/products.json', JSON.stringify(products));
        res.send('Patch successful!');
        return;
    }
    });
    res.send('Patch failed!');
})

app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    products = products.filter(product => product.id !== id);
    
    fs.writeFileSync('./db/products.json', JSON.stringify(products));
    res.send('Delete successful!');
});
  
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(jokes);
});