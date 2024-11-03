import express from 'express';
import { getAllUsers, addUser, patchUser, addUsers, getUserById } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getAllUsers, (req, res) => {
    res.send(res.body);
});

router.get('/:id', getUserById,(req, res) =>{
});

router.post('/single', addUser, (req, res) => {
});

router.post('/many', addUsers, (req, res) => {
});

router.patch('/', patchUser,(req, res) => {
})

router.delete('/:id', (req,res) => {
});

router.use((err, req, res, next) => {
    console.log("error in the users route or controller", err);

    res.status(500).send("something went wrong in the server...");
});

export default router;