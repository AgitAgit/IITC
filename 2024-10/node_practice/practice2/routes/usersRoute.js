import express from 'express';
import { getAllUsers, addUser, patchUser, addUsers, getUserById } from '../controllers/usersController.js';

const router = express.Router();

//----------------------------------------I'M HERE---------------------------------------
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

router.use('/',(err, req, res, next) => {
    
});

export default router;