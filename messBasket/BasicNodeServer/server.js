const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 3000;
dotenv.config();
const data = process.env.DUCK;


app.get('/',(req, res) =>{
    res.send("Welcome to my basic Express server!");
});

app.get('/about',(req, res) => {
    res.send("This server was created by [Your Name]");
});

app.get( '/contact', (req,res) =>{
    res.json({
        phoneNumber : '050.duck',
        email : 'duck@gmail.com'
    });
});

const products = [{id:1, name : 'apple', price:3},{id:2, name : 'brick', price:0.4},{id:3, name : 'turtle', price:3000}];

app.get('/api/products',(req, res) =>{
    res.json(products);
});

app.get('/api/products/:id',(req,res)=>{
    const id = req.params.id;
    const product = products.find(product => product.id === parseInt(id));
    res.json(product);
});

app.get('/*',(req,res)=> {
    res.send(data);
});

app.listen(port, ()=>{
    console.log(`Basic server started listening on port ${port}`);
});

