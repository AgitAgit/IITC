import express from 'express';
import { getUsers, addUser } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);

router.post('/single', addUser);

router.use((err, req, res, next) => {
    console.log("usersRoute middleware says: ",err);
});

export default router;