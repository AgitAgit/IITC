import express from 'express';
import originalUsers from '../db/users.json' assert {type:'json'}
import { writeToFileSync } from '../app.js';

const router = express.Router();
let users = originalUsers;

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/random', (req, res) => {
    const randomUser = users[Math.floor(Math.random() * users.length)]
    res.send(randomUser)
});

router.get('/:id', (req, res) =>{
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(user) res.send(user);
    else res.send("user not found...");
});

router.post('/single', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    writeToFileSync('./db/users.json',JSON.stringify(users));  
    res.send('user added!');
});

router.post('/many', (req, res) => {
    const newUsers = req.body;
    users.push(...newUsers);
    writeToFileSync('./db/users.json',JSON.stringify(users));  
    res.send('users added!');
});

router.patch('/:id', (req, res) => {//there is a problem "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"
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

router.delete('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    
    writeToFileSync('./db/users.json', JSON.stringify(users));
    res.send('delete successful!');
});

export default router;