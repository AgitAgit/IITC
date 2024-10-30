import express from 'express';
import originalUsers from '../db/users.json' assert {type:'json'}
import { writeToFileSync } from '../app';

const router = express.Router();
let users = originalUsers;

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
    writeToFileSync('./db/users.json',JSON.stringify(users));  
    res.send('user added!');
});

app.post('/api/users/many', (req, res) => {
    const newUsers = req.body;
    users.push(...newUsers);
    writeToFileSync('./db/users.json',JSON.stringify(users));  
    res.send('users added!');
});

app.patch('/api/users/:id', (req, res) => {
    const newUser = req.body;
    const id = parseInt(req.params.id);
    users.forEach(user => {
        if(user.id === id){
            users[users.indexOf(user)] = newUser;
            writeToFileSync('./db/users.json', JSON.stringify(users));
            res.send('patch successful!');
        }
    })
    res.send('patch failed!');
})

app.delete('/api/users/:id', (req,res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    
    writeToFileSync('./db/jokes.json', JSON.stringify(users));
    res.send('delete successful!');
});

export default router;